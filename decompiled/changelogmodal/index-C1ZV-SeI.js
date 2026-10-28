import {
  d,
  h,
  w as w_1,
  w_1 as w_1_1,
  w_1_1 as w_1_1_1,
  M as M_1,
} from "./index-AoERIL5v.js";
const N = "PFWi";
const p = "n8wJ";
const C = "h7cX";
const H = "zs1l";
const M = "Em8q";
const b = "TcHJ";
const V = "FQGX";
const w = "VhKv";
const x = "bVox";
const z = "TMHp";
const E = "SbdV";

const a = {
  changelog: N,
  entry: p,
  entryHeader: C,
  version: H,
  date: M,
  changes: b,
  change: V,
  singleChange: w,
  note: x,
  loading: z,
  divider: E,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [l, d] = d([]);
  const [h, t] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    w_1
      .getChangelog()
      .then((c) => {
        if (!e) {
          d(c);
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
    ? w_1_1(
        w_1_1_1(M_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: w_1_1_1("div", {
            className: a.changelog,
            children: h
              ? w_1_1_1("div", {
                  className: a.loading,
                  children: "Загрузка...",
                })
              : l.map((e, c) =>
                  w_1_1_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        w_1_1_1("div", {
                          className: a.entryHeader,
                          children: [
                            w_1_1_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            w_1_1_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? w_1_1_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : w_1_1_1("ul", {
                              className: a.changes,
                              children: e.changes.map((r, g) =>
                                w_1_1_1(
                                  "li",
                                  { className: a.change, children: r },
                                  g
                                )
                              ),
                            }),
                        e.note &&
                          w_1_1_1("p", { className: a.note, children: e.note }),
                        c < l.length - 1 &&
                          w_1_1_1("div", { className: a.divider }),
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
