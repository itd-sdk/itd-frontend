from re import compile as re_compile

_SVG_TAGS = {
    'svg', 'path', 'circle', 'rect', 'g', 'line', 'polyline', 'polygon',
    'ellipse', 'defs', 'clipPath', 'use', 'mask', 'symbol',
    'linearGradient', 'radialGradient', 'stop', 'text', 'tspan',
}

_ATTR_MAP = {
    'strokeWidth': 'stroke-width', 'strokeLinecap': 'stroke-linecap',
    'strokeLinejoin': 'stroke-linejoin', 'strokeDasharray': 'stroke-dasharray',
    'strokeDashoffset': 'stroke-dashoffset', 'strokeMiterlimit': 'stroke-miterlimit',
    'strokeOpacity': 'stroke-opacity', 'fillRule': 'fill-rule',
    'fillOpacity': 'fill-opacity', 'clipPath': 'clip-path',
    'clipRule': 'clip-rule', 'className': 'class',
    'fontSize': 'font-size', 'fontFamily': 'font-family',
    'dominantBaseline': 'dominant-baseline', 'textAnchor': 'text-anchor',
}
_KEEP_CAMEL = {
    'viewBox', 'preserveAspectRatio', 'gradientUnits', 'gradientTransform',
    'patternUnits', 'patternTransform', 'clipPathUnits',
    'markerWidth', 'markerHeight', 'refX', 'refY', 'xmlns',
}

_RE_SVG_CALL = re_compile(r'(?<!["\w])\w{1,3}\("svg",')


def _svg_attr(name):
    if name in _KEEP_CAMEL or name.startswith('xmlns') or '-' in name:
        return name
    return _ATTR_MAP.get(name, name)


def _skip_balanced(text, pos, op, cl):
    """Return position just after the matching closing char."""
    depth = 0
    i = pos
    while i < len(text):
        c = text[i]
        if c in ('"', "'"):
            q = c
            i += 1
            while i < len(text):
                if text[i] == '\\':
                    i += 2
                    continue
                if text[i] == q:
                    i += 1
                    break
                i += 1
            continue
        if c == op:
            depth += 1
        elif c == cl:
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return len(text)


def _read_str(text, pos):
    q = text[pos]
    i = pos + 1
    buf = []
    while i < len(text):
        c = text[i]
        if c == '\\' and i + 1 < len(text):
            nc = text[i + 1]
            buf.append({'n': '\n', 't': '\t', 'r': '\r'}.get(nc, nc))
            i += 2
        elif c == q:
            return ''.join(buf), i + 1
        else:
            buf.append(c)
            i += 1
    return ''.join(buf), i


def _parse_val(text, pos):
    if pos >= len(text):
        return None, pos
    c = text[pos]
    if c in ('"', "'"):
        return _read_str(text, pos)
    if c == '{':
        end = _skip_balanced(text, pos, '{', '}')
        return _parse_obj(text, pos)[0], end
    if c == '[':
        end = _skip_balanced(text, pos, '[', ']')
        items = _parse_arr(text[pos + 1:end - 1])
        return ('_arr', items), end
    if c == 'n' and text[pos:pos + 4] == 'null':
        return None, pos + 4
    if c == 't' and text[pos:pos + 4] == 'true':
        return True, pos + 4
    if c == 'f' and text[pos:pos + 5] == 'false':
        return False, pos + 5
    if c.isdigit() or (c == '-' and pos + 1 < len(text) and text[pos + 1].isdigit()):
        j = pos + (1 if c == '-' else 0)
        while j < len(text) and (text[j].isdigit() or text[j] == '.'):
            j += 1
        return text[pos:j], j
    # Function call?
    import re as _re
    m = _re.match(r'(\w+)\(', text[pos:])
    if m:
        fn = m.group(1)
        paren = pos + len(fn)
        end = _skip_balanced(text, paren, '(', ')')
        return ('_el', fn, text[paren + 1:end - 1]), end
    # Plain variable — read to delimiter
    j = pos
    while j < len(text) and text[j] not in ',}])':
        j += 1
    return ('_var', text[pos:j].strip()), j


def _parse_obj(text, pos):
    result = {}
    i = pos + 1  # skip '{'
    while i < len(text):
        while i < len(text) and text[i] in ' \t\n\r,':
            i += 1
        if i >= len(text) or text[i] == '}':
            return result, i + 1
        if text[i] in ('"', "'"):
            key, i = _read_str(text, i)
        else:
            j = i
            while j < len(text) and text[j] not in ':} \t\n':
                j += 1
            key = text[i:j]
            i = j
        while i < len(text) and text[i] in ' \t':
            i += 1
        if i >= len(text) or text[i] != ':':
            break
        i += 1
        while i < len(text) and text[i] in ' \t':
            i += 1
        val, i = _parse_val(text, i)
        result[key] = val
    return result, i + 1


def _parse_arr(inner):
    items = []
    pos = 0
    while pos < len(inner):
        while pos < len(inner) and inner[pos] in ' \t\n\r,':
            pos += 1
        if pos >= len(inner):
            break
        val, pos = _parse_val(inner, pos)
        items.append(val)
    return items


def _el_to_xml(args_str, indent=0):
    pos = 0
    while pos < len(args_str) and args_str[pos] in ' \t':
        pos += 1
    if pos >= len(args_str) or args_str[pos] not in ('"', "'"):
        return None
    tag, pos = _read_str(args_str, pos)
    if tag not in _SVG_TAGS:
        return None
    while pos < len(args_str) and args_str[pos] in ', \t':
        pos += 1
    if pos >= len(args_str) or args_str[pos] != '{':
        return None
    props, _ = _parse_obj(args_str, pos)

    attrs = []
    children = []
    pad = '  ' * indent
    child_pad = '  ' * (indent + 1)

    for k, v in props.items():
        if k == 'children':
            raw = v[1] if (isinstance(v, tuple) and v[0] == '_arr') else [v]
            for child in raw:
                if isinstance(child, tuple) and child[0] == '_el':
                    xml = _el_to_xml(child[2], indent + 1)
                    if xml:
                        children.append(xml)
        elif isinstance(v, str):
            attrs.append(f'{_svg_attr(k)}="{v}"')
        elif isinstance(v, (int, float)):
            attrs.append(f'{_svg_attr(k)}="{v}"')
        elif isinstance(v, tuple) and v[0] == '_var' and _svg_attr(k) in ('width', 'height'):
            attrs.append(f'{_svg_attr(k)}="24"')

    # Ensure svg always has xmlns for valid standalone SVG
    if tag == 'svg' and not any(a.startswith('xmlns=') for a in attrs):
        attrs.insert(0, 'xmlns="http://www.w3.org/2000/svg"')

    attr_str = (' ' + ' '.join(attrs)) if attrs else ''
    if children:
        inner_lines = '\n'.join(f'{child_pad}{c}' for c in children)
        return f'<{tag}{attr_str}>\n{inner_lines}\n{pad}</{tag}>'
    return f'<{tag}{attr_str}/>'


def extract_svgs(js_content):
    """Return list of SVG XML strings found in minified React JS."""
    results = []
    for m in _RE_SVG_CALL.finditer(js_content):
        paren = js_content.index('(', m.start())
        end = _skip_balanced(js_content, paren, '(', ')')
        xml = _el_to_xml(js_content[paren + 1:end - 1])
        if xml:
            results.append(xml)
    return results
