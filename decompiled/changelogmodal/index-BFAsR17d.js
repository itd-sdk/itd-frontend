import { d, y as y_1, au, $, a as a_1, M } from "./index-DuQT229k.js";
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
      s._sentryDebugIds[c] = "6cea3b3c-2014-417b-9d12-fce1f54087fc";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-6cea3b3c-2014-417b-9d12-fce1f54087fc";
    }
  } catch {}
})();
const b = "hE0V";
const p = "kSXt";
const N = "nAbh";
const y = "PVHD";
const E = "FWbJ";
const C = "e5Ao";
const D = "LQh6";
const w = "XvRC";
const I = "qzDq";
const _ = "GSPW";
const A = "Qkr5";

const a = {
  changelog: b,
  entry: p,
  entryHeader: N,
  version: y,
  date: E,
  changes: C,
  change: D,
  singleChange: w,
  note: I,
  loading: _,
  divider: A,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = d([]);
  const [r, d] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    au.getChangelog()
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
        a_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: a_1("div", {
            className: a.changelog,
            children: r
              ? a_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, l) =>
                  a_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        a_1("div", {
                          className: a.entryHeader,
                          children: [
                            a_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            a_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? a_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : a_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                a_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          a_1("p", { className: a.note, children: e.note }),
                        l < t.length - 1 &&
                          a_1("div", { className: a.divider }),
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
