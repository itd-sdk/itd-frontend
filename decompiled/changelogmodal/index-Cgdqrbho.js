import { d, h, aA, $, aA as aA_1, M } from "./index-gHxZkwFX.js";
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
    s.SENTRY_RELEASE = { id: "1.1.4" };
    const c = new s.Error().stack;

    if (c) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[c] = "870e0a0f-44f6-4c92-9acb-38937ff9ab4b";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-870e0a0f-44f6-4c92-9acb-38937ff9ab4b";
    }
  } catch {}
})();
const m = "jg5i";
const N = "iuJK";
const p = "P5bf";
const y = "onvu";
const C = "CxZd";
const E = "rgPM";
const w = "UcQv";
const I = "KZYJ";
const _ = "d0P0";
const A = "N26o";
const D = "qAbc";

const a = {
  changelog: m,
  entry: N,
  entryHeader: p,
  version: y,
  date: C,
  changes: E,
  change: w,
  singleChange: I,
  note: _,
  loading: A,
  divider: D,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = d([]);
  const [r, d] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aA.getChangelog()
      .then((l) => {
        if (!e) {
          o(l);
          d(false);
        }
      })
      .catch(() => {
        if (!e) {
          d(false);
        }
      });

    return () => {
      e = true;
    };
  }, [isOpen]);

  return isOpen
    ? $(
        aA_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aA_1("div", {
            className: a.changelog,
            children: r
              ? aA_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, l) =>
                  aA_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        aA_1("div", {
                          className: a.entryHeader,
                          children: [
                            aA_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            aA_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? aA_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : aA_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                aA_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          aA_1("p", { className: a.note, children: e.note }),
                        l < t.length - 1 &&
                          aA_1("div", { className: a.divider }),
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
