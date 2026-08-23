import { d, y as y_1, az, $, az as az_1, M } from "./index-pEgBAsWz.js";
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
      s._sentryDebugIds[t] = "6424a10f-9782-4c36-8475-1938b3fe1b36";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-6424a10f-9782-4c36-8475-1938b3fe1b36";
    }
  } catch {}
})();
const b = "Fzjp";
const p = "e71K";
const N = "ATzR";
const y = "aVuX";
const w = "w5ge";
const E = "u1Om";
const I = "jbIB";
const C = "Buom";
const T = "ffax";
const _ = "sRVH";
const z = "eT70";

const a = {
  changelog: b,
  entry: p,
  entryHeader: N,
  version: y,
  date: w,
  changes: E,
  change: I,
  singleChange: C,
  note: T,
  loading: _,
  divider: z,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [l, o] = d([]);
  const [r, d] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    az.getChangelog()
      .then((c) => {
        if (!e) {
          o(c);
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
        az_1(M, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: az_1("div", {
            className: a.changelog,
            children: r
              ? az_1("div", { className: a.loading, children: "Загрузка..." })
              : l.map((e, c) =>
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
                        c < l.length - 1 &&
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
