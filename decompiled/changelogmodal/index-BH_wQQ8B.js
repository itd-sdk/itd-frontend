import { d, h, aA, $, aA as aA_1, M as M_1 } from "./index-ORJLmKGS.js";
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
    s.SENTRY_RELEASE = { id: "1.1.3" };
    const d = new s.Error().stack;

    if (d) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[d] = "eaf92960-0b1c-49a0-ba3a-c383d1b97795";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-eaf92960-0b1c-49a0-ba3a-c383d1b97795";
    }
  } catch {}
})();
const b = "hOs3";
const p = "Vtv2";
const y = "I8jQ";
const N = "dhQT";
const I = "xYMl";
const E = "dpMO";
const w = "BOy8";
const C = "uyv1";
const M = "O1Bo";
const _ = "WWig";
const D = "aIkd";

const a = {
  changelog: b,
  entry: p,
  entryHeader: y,
  version: N,
  date: I,
  changes: E,
  change: w,
  singleChange: C,
  note: M,
  loading: _,
  divider: D,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = onClose([]);
  const [r, c] = onClose(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aA.getChangelog()
      .then((l) => {
        if (!e) {
          o(l);
          c(false);
        }
      })
      .catch(() => {
        if (!e) {
          c(false);
        }
      });

    return () => {
      e = true;
    };
  }, [isOpen]);

  return isOpen
    ? $(
        aA_1(M_1, {
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
