import { d, h, aG, $, aG as aG_1, M } from "./index-B74jCtUp.js";
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
      s._sentryDebugIds[c] = "277dbdcc-17ab-4fb6-8777-57ccf1496e4b";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-277dbdcc-17ab-4fb6-8777-57ccf1496e4b";
    }
  } catch {}
})();
const v = "igj2";
const p = "KzLB";
const N = "n0YC";
const y = "Ifzd";
const E = "nfbV";
const w = "eqod";
const C = "wFEz";
const I = "f5nt";
const _ = "PMTP";
const z = "SnWs";
const D = "oyoJ";

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
  loading: z,
  divider: D,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [d, o] = d([]);
  const [r, l] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aG.getChangelog()
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
        aG_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aG_1("div", {
            className: a.changelog,
            children: r
              ? aG_1("div", { className: a.loading, children: "Загрузка..." })
              : d.map((e, t) =>
                  aG_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        aG_1("div", {
                          className: a.entryHeader,
                          children: [
                            aG_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            aG_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? aG_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : aG_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                aG_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          aG_1("p", { className: a.note, children: e.note }),
                        t < d.length - 1 &&
                          aG_1("div", { className: a.divider }),
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
