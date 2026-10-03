import { d, h, aV, $, aV as aV_1, M } from "./index-CsuAWxkQ.js";
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
    const l = new s.Error().stack;

    if (l) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[l] = "40b68860-c568-4468-83f0-6a2b7b042e49";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-40b68860-c568-4468-83f0-6a2b7b042e49";
    }
  } catch {}
})();
const v = "a6WY";
const p = "CzNV";
const N = "ma3f";
const y = "mGPn";
const C = "Bd5u";
const E = "Uole";
const I = "C6Vf";
const w = "IHTy";
const _ = "CkV7";
const D = "Ajp7";
const H = "szYo";

const a = {
  changelog: v,
  entry: p,
  entryHeader: N,
  version: y,
  date: C,
  changes: E,
  change: I,
  singleChange: w,
  note: _,
  loading: D,
  divider: H,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = d([]);
  const [r, d] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aV.getChangelog()
      .then((c) => {
        if (!e) {
          o(c);
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
        aV_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aV_1("div", {
            className: a.changelog,
            children: r
              ? aV_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, c) =>
                  aV_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        aV_1("div", {
                          className: a.entryHeader,
                          children: [
                            aV_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            aV_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? aV_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : aV_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                aV_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          aV_1("p", { className: a.note, children: e.note }),
                        c < t.length - 1 &&
                          aV_1("div", { className: a.divider }),
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
