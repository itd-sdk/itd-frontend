import {
  d,
  h,
  aU,
  $,
  aU as aU_1,
  ChangelogModal as ChangelogModal_1,
} from "./index-D4QRo1-7.js";
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
      s._sentryDebugIds[d] = "c86f77cd-1d1b-4ec2-94ae-c29ed9031a29";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-c86f77cd-1d1b-4ec2-94ae-c29ed9031a29";
    }
  } catch {}
})();
const b = "NYfm";
const N = "Ambb";
const p = "zGrH";
const y = "Pb7M";
const w = "vPCg";
const C = "whqv";
const E = "w1Hd";
const I = "ts8f";
const H = "VB2T";
const _ = "d4C8";
const A = "IAww";

const a = {
  changelog: b,
  entry: N,
  entryHeader: p,
  version: y,
  date: w,
  changes: C,
  change: E,
  singleChange: I,
  note: H,
  loading: _,
  divider: A,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [c, o] = onClose([]);
  const [r, l] = onClose(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aU.getChangelog()
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
        aU_1(ChangelogModal_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: aU_1("div", {
            className: a.changelog,
            children: r
              ? aU_1("div", { className: a.loading, children: "Загрузка..." })
              : c.map((e, t) =>
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
                        t < c.length - 1 &&
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
