import { d, y as y_1, az, $, $ as $_1, M } from "./index-DBLtLuBZ.js";
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const d = new s.Error().stack;

    if (d) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[d] = "ac8c0edd-d422-431c-b0bd-ebb5b6679e16";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-ac8c0edd-d422-431c-b0bd-ebb5b6679e16";
    }
  } catch {}
})();
const v = "de3R";
const p = "e8ib";
const N = "ekFw";
const y = "x2bJ";
const E = "vrt4";
const w = "bvCd";
const C = "mVFp";
const I = "ljzv";
const _ = "e5ie";
const D = "R7xE";
const H = "XHQm";

const a = {
  changelog: v,
  entry: p,
  entryHeader: N,
  version: y,
  date: E,
  changes: w,
  change: C,
  singleChange: I,
  note: _,
  loading: D,
  divider: H,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [c, o] = onClose([]);
  const [r, l] = onClose(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    az.getChangelog()
      .then((t) => {
        if (!e) {
          o(t);
          l(false);
        }
      })
      .catch(() => {
        if (!e) {
          l(false);
        }
      });

    return () => {
      e = true;
    };
  }, [isOpen]);

  return isOpen
    ? $(
        $_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: $_1("div", {
            className: a.changelog,
            children: r
              ? $_1("div", { className: a.loading, children: "Загрузка..." })
              : c.map((e, t) =>
                  $_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        $_1("div", {
                          className: a.entryHeader,
                          children: [
                            $_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            $_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? $_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : $_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                $_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          $_1("p", { className: a.note, children: e.note }),
                        t < c.length - 1 &&
                          $_1("div", { className: a.divider }),
                      ],
                    },
                    e.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}

export { ChangelogModal as ChangelogModal, ChangelogModal as default };
