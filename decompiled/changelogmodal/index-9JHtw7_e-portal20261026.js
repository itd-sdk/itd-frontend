import {
  d,
  h,
  F,
  E as E_1,
  F as F_1,
  M,
} from "./index-BQxlThnW-portal20261026.js";
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
      s._sentryDebugIds[c] = "38a01b93-c20a-4870-b292-b9fc40a35b74";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-38a01b93-c20a-4870-b292-b9fc40a35b74";
    }
  } catch {}
})();
const v = "uIFb";
const p = "cOVM";
const N = "By00";
const y = "Ab6x";
const C = "VKWJ";
const E = "HCSJ";
const I = "WZCg";
const w = "paJF";
const _ = "rfKv";
const D = "QgRi";
const H = "guie";

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
  const [r, i] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    F.getChangelog()
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
    ? E_1(
        F_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: F_1("div", {
            className: a.changelog,
            children: r
              ? F_1("div", { className: a.loading, children: "Загрузка..." })
              : t.map((e, l) =>
                  F_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        F_1("div", {
                          className: a.entryHeader,
                          children: [
                            F_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            F_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? F_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : F_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                F_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          F_1("p", { className: a.note, children: e.note }),
                        l < t.length - 1 &&
                          F_1("div", { className: a.divider }),
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
