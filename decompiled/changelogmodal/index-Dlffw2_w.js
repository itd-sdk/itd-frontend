import { d, h, aV, $, aV as aV_1, M } from "./index-DqQficWb.js";
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
      s._sentryDebugIds[c] = "19a3a275-497e-4e7f-9c1a-25544acbc821";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-19a3a275-497e-4e7f-9c1a-25544acbc821";
    }
  } catch {}
})();
const b = "bHg9";
const p = "UeIA";
const N = "DnCx";
const y = "gdsW";
const E = "vdsw";
const w = "quxK";
const C = "t7mE";
const I = "VPLU";
const D = "Fgkb";
const _ = "R7Tw";
const H = "EG0i";

const a = {
  changelog: b,
  entry: p,
  entryHeader: N,
  version: y,
  date: E,
  changes: w,
  change: C,
  singleChange: I,
  note: D,
  loading: _,
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
        aV_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aV_1("div", {
            className: a.changelog,
            children: r
              ? aV_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, l) =>
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
                        l < t.length - 1 &&
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
