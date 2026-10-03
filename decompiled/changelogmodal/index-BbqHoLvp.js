import {
  d,
  h,
  aV,
  $,
  aV as aV_1,
  ChangelogModal as ChangelogModal_1,
} from "./index-DK2L49XD.js";
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
    const t = new s.Error().stack;

    if (t) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[t] = "b650e151-ffea-4cbe-8233-00f52b13d518";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-b650e151-ffea-4cbe-8233-00f52b13d518";
    }
  } catch {}
})();
const v = "kt5F";
const p = "wm5b";
const N = "OO3A";
const y = "BOpX";
const w = "aiWY";
const C = "WBUR";
const E = "uPKJ";
const I = "KCi5";
const _ = "rFww";
const D = "hIJl";
const A = "zhqZ";

const a = {
  changelog: v,
  entry: p,
  entryHeader: N,
  version: y,
  date: w,
  changes: C,
  change: E,
  singleChange: I,
  note: _,
  loading: D,
  divider: A,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [l, o] = d([]);
  const [r, c] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aV.getChangelog()
      .then((d) => {
        if (!e) {
          o(d);
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
        aV_1(ChangelogModal_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aV_1("div", {
            className: a.changelog,
            children: r
              ? aV_1("div", { className: a.loading, children: "Загрузка..." })
              : l.map((e, d) =>
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
                        d < l.length - 1 &&
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
