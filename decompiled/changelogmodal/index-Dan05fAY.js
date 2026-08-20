import { d, y as y_1, az, $, az as az_1, M } from "./index-DDTOXJaD.js";
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
      s._sentryDebugIds[t] = "5026bd06-b4f2-403a-bc38-e01fae4f5e3f";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-5026bd06-b4f2-403a-bc38-e01fae4f5e3f";
    }
  } catch {}
})();
const v = "Nti9";
const p = "jRPV";
const N = "I7Y8";
const y = "z67C";
const E = "XLKA";
const C = "Eoir";
const w = "lpsM";
const I = "TJEe";
const _ = "zddW";
const z = "iyjC";
const D = "Q0w8";

const a = {
  changelog: v,
  entry: p,
  entryHeader: N,
  version: y,
  date: E,
  changes: C,
  change: w,
  singleChange: I,
  note: _,
  loading: z,
  divider: D,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [d, o] = d([]);
  const [r, i] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    az.getChangelog()
      .then((l) => {
        if (!e) {
          o(l);
          i(false);
        }
      })
      .catch(() => {
        if (!e) {
          i(false);
        }
      });

    return () => {
      e = true;
    };
  }, [isOpen]);

  return isOpen
    ? $(
        az_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: az_1("div", {
            className: a.changelog,
            children: r
              ? az_1("div", { className: a.loading, children: "Загрузка..." })
              : d.map((e, l) =>
                  az_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        az_1("div", {
                          className: a.entryHeader,
                          children: [
                            az_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            az_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? az_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : az_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                az_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          az_1("p", { className: a.note, children: e.note }),
                        l < d.length - 1 &&
                          az_1("div", { className: a.divider }),
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
