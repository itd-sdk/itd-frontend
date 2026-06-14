import { d, y as y_1, au, $, a as a_1, M } from "./index-BAlLDjSl.js";
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
    s.SENTRY_RELEASE = { id: "1.1.1" };
    const d = new s.Error().stack;

    if (d) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[d] = "c4f6d927-6e2e-4d10-aee4-3ad1f3dde33a";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-c4f6d927-6e2e-4d10-aee4-3ad1f3dde33a";
    }
  } catch {}
})();
const p = "Qr6Y";
const N = "ep89";
const b = "hJXi";
const y = "AEfc";
const E = "NQYW";
const C = "XJ4x";
const w = "eA5n";
const A = "NT6J";
const I = "PuTd";
const T = "cA57";
const _ = "oCbp";

const a = {
  changelog: p,
  entry: N,
  entryHeader: b,
  version: y,
  date: E,
  changes: C,
  change: w,
  singleChange: A,
  note: I,
  loading: T,
  divider: _,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = onClose([]);
  const [r, l] = onClose(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    au.getChangelog()
      .then((c) => {
        if (!e) {
          o(c);
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
        a_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: a_1("div", {
            className: a.changelog,
            children: r
              ? a_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, c) =>
                  a_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        a_1("div", {
                          className: a.entryHeader,
                          children: [
                            a_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            a_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? a_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : a_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                a_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          a_1("p", { className: a.note, children: e.note }),
                        c < t.length - 1 &&
                          a_1("div", { className: a.divider }),
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
