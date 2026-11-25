import { d, h, aJ, aB, aq as u_1, aq } from "./index-4cbec7521f6a.js";
const p = "HL2c";
const f = "ORRv";
const C = "zK65";
const L = "uXmO";
const H = "drL6";
const q = "x2Qr";
const z = "qm9L";
const R = "UN0h";
const b = "WqIn";
const x = "E9zU";
const y = "RBLn";
const B = "rmye";
const E = "T0b1";

const n = {
  modal: p,
  changelog: f,
  entry: C,
  entryHeader: L,
  version: H,
  date: q,
  changes: z,
  change: R,
  singleChange: b,
  releaseCopy: x,
  note: y,
  loading: B,
  divider: E,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [i, h] = d([]);
  const [g, t] = d(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    aJ.getChangelog()
      .then((l) => {
        if (!e) {
          h(l);
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
    ? aB(
        u_1(aq, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          className: n.modal,
          children: u_1("div", {
            className: n.changelog,
            children: g
              ? u_1("div", { className: n.loading, children: "Загрузка..." })
              : i.map((e, l) =>
                  u_1(
                    "div",
                    {
                      className: n.entry,
                      children: [
                        u_1("div", {
                          className: n.entryHeader,
                          children: [
                            u_1("span", {
                              className: n.version,
                              children: ["v", e.version],
                            }),
                            u_1("span", {
                              className: n.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.version === "1.3.0"
                          ? u_1("div", {
                              className: n.releaseCopy,
                              children: e.changes.map((c, o) =>
                                u_1(
                                  "p",
                                  { className: n.singleChange, children: c },
                                  o
                                )
                              ),
                            })
                          : e.changes.length === 1 &&
                            !e.changes[0].startsWith("•")
                          ? u_1("p", {
                              className: n.singleChange,
                              children: e.changes[0],
                            })
                          : u_1("ul", {
                              className: n.changes,
                              children: e.changes.map((c, o) =>
                                u_1(
                                  "li",
                                  { className: n.change, children: c },
                                  o
                                )
                              ),
                            }),
                        e.note &&
                          u_1("p", { className: n.note, children: e.note }),
                        l < i.length - 1 &&
                          u_1("div", { className: n.divider }),
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
