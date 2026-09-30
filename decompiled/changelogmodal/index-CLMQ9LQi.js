import { d, h, aU, $, aU as aU_1, M } from "./index-BuVp7kGl.js";
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
      s._sentryDebugIds[d] = "c820a200-d992-4458-9a42-09f1d605299f";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-c820a200-d992-4458-9a42-09f1d605299f";
    }
  } catch {}
})();
const p = "zLIg";
const N = "ohdo";
const b = "xnKs";
const y = "GdxZ";
const C = "wzCY";
const I = "I5Om";
const w = "pjtH";
const E = "QFq4";
const T = "qybT";
const _ = "P28p";
const D = "qCTf";

const a = {
  changelog: p,
  entry: N,
  entryHeader: b,
  version: y,
  date: C,
  changes: I,
  change: w,
  singleChange: E,
  note: T,
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

    aU.getChangelog()
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
        aU_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aU_1("div", {
            className: a.changelog,
            children: r
              ? aU_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, l) =>
                  aU_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        aU_1("div", {
                          className: a.entryHeader,
                          children: [
                            aU_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            aU_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? aU_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : aU_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                aU_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          aU_1("p", { className: a.note, children: e.note }),
                        l < t.length - 1 &&
                          aU_1("div", { className: a.divider }),
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
