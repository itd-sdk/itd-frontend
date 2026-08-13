import { d, y as y_1, az, $, az as az_1, M } from "./index-B9FitUXy.js";
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
      s._sentryDebugIds[c] = "9e1a85c5-ce57-449c-8017-0adecef1cdd2";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-9e1a85c5-ce57-449c-8017-0adecef1cdd2";
    }
  } catch {}
})();
const p = "LHZl";
const N = "AYom";
const y = "RUGB";
const b = "vXQl";
const C = "icer";
const E = "qCUW";
const w = "Fase";
const H = "cdHx";
const I = "kjAY";
const _ = "fQ40";
const A = "im7k";

const a = {
  changelog: p,
  entry: N,
  entryHeader: y,
  version: b,
  date: C,
  changes: E,
  change: w,
  singleChange: H,
  note: I,
  loading: _,
  divider: A,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [d, o] = d([]);
  const [r, t] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    az.getChangelog()
      .then((l) => {
        if (!e) {
          o(l);
          t(false);
        }
      })
      .catch(() => {
        if (!e) {
          t(false);
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
