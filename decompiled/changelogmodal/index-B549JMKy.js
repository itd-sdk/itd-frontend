import {
  d,
  y as y_1,
  au,
  $,
  a as a_1,
  ChangelogModal as ChangelogModal_1,
} from "./index-BewGW5_v.js";
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
      s._sentryDebugIds[d] = "e9ffe76c-bbac-4183-8ba7-87db5d6d647a";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-e9ffe76c-bbac-4183-8ba7-87db5d6d647a";
    }
  } catch {}
})();
const v = "vFWM";
const p = "u99S";
const N = "FcjH";
const y = "XT3g";
const w = "SwCD";
const C = "fkkJ";
const D = "Rigz";
const E = "IbAW";
const I = "fJa9";
const _ = "LaKA";
const A = "D7rK";

const a = {
  changelog: v,
  entry: p,
  entryHeader: N,
  version: y,
  date: w,
  changes: C,
  change: D,
  singleChange: E,
  note: I,
  loading: _,
  divider: A,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [c, o] = onClose([]);
  const [r, l] = onClose(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    au.getChangelog()
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
        a_1(ChangelogModal_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: a_1("div", {
            className: a.changelog,
            children: r
              ? a_1("div", { className: a.loading, children: "Загрузка..." })
              : c.map((e, t) =>
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
                        t < c.length - 1 &&
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
