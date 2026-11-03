import {
  d,
  h,
  w as w_1,
  v as v_1,
  w_1 as w_1_1,
  ChangelogModal as ChangelogModal_1,
} from "./index-GOT6tyDH.js";
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
      s._sentryDebugIds[d] = "8c94fc0b-fffe-4246-bd39-bd00efed5e6a";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-8c94fc0b-fffe-4246-bd39-bd00efed5e6a";
    }
  } catch {}
})();
const v = "tlke";
const N = "AXls";
const p = "VwWn";
const y = "FmhO";
const w = "uGh2";
const C = "Nls9";
const E = "f6c8";
const H = "HfwQ";
const I = "abBq";
const _ = "cCHJ";
const D = "Z3Qg";

const a = {
  changelog: v,
  entry: N,
  entryHeader: p,
  version: y,
  date: w,
  changes: C,
  change: E,
  singleChange: H,
  note: I,
  loading: _,
  divider: D,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [l, o] = onClose([]);
  const [r, t] = onClose(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    w_1
      .getChangelog()
      .then((c) => {
        if (!e) {
          o(c);
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
    ? v_1(
        w_1_1(ChangelogModal_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: w_1_1("div", {
            className: a.changelog,
            children: r
              ? w_1_1("div", { className: a.loading, children: "Загрузка..." })
              : l.map((e, c) =>
                  w_1_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        w_1_1("div", {
                          className: a.entryHeader,
                          children: [
                            w_1_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            w_1_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? w_1_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : w_1_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                w_1_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          w_1_1("p", { className: a.note, children: e.note }),
                        c < l.length - 1 &&
                          w_1_1("div", { className: a.divider }),
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
