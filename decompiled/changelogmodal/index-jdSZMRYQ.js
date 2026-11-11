import { d, h, aM, $, aM as aM_1, M as M_1 } from "./index-dnACTU3c.js";
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
    const c = new s.Error().stack;

    if (c) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[c] = "be0d161b-e8ca-4240-a9c7-bc3c5426b26e";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-be0d161b-e8ca-4240-a9c7-bc3c5426b26e";
    }
  } catch {}
})();
const v = "LLb7";
const p = "RQ91";
const N = "jRBZ";
const y = "ZDph";
const L = "LTfo";
const w = "YUIA";
const E = "M4Ld";
const I = "T7Sx";
const C = "kQRz";
const D = "voLw";
const M = "FjJz";

const a = {
  changelog: v,
  entry: p,
  entryHeader: N,
  version: y,
  date: L,
  changes: w,
  change: E,
  singleChange: I,
  note: C,
  loading: D,
  divider: M,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = d([]);
  const [r, l] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aM.getChangelog()
      .then((d) => {
        if (!e) {
          o(d);
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
        aM_1(M_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aM_1("div", {
            className: a.changelog,
            children: r
              ? aM_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, d) =>
                  aM_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        aM_1("div", {
                          className: a.entryHeader,
                          children: [
                            aM_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            aM_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? aM_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : aM_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                aM_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          aM_1("p", { className: a.note, children: e.note }),
                        d < t.length - 1 &&
                          aM_1("div", { className: a.divider }),
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
