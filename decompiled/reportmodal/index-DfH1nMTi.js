import { Q, M_1 as R_1, d, u, B, M as M_1, o } from "./index-AoERIL5v.js";
import { I as I_1 } from "./IconCheckCircle-9NCW5RVi.js";

const l = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const D = {
  async createReport(n) {
    const r = await Q.post(R_1.reports.create, n);
    return r?.data ?? r;
  },
};

const I = "Dv7T";
const C = "gH7y";
const S = "r5m3";
const y = "mvFm";
const k = "lVj1";
const G = "mp6q";
const g = "yyQD";
const L = "GhLN";
const w = "hYGF";
const x = "aDRG";
const F = "J0Ti";
const Y = "tsSK";
const H = "fC0I";
const M = "cO9x";

const s = {
  modalReport: I,
  content: C,
  successIcon: S,
  title: y,
  subtitle: k,
  options: G,
  chip: g,
  radio: L,
  chipActive: w,
  radioDot: x,
  detailsSection: F,
  textarea: Y,
  error: H,
  actions: M,
};

const U = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const W = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
  const [c, T] = d(null);
  const [d, u] = d("");
  const [N, h] = d(false);
  const [O, a] = d(null);
  const [_, E] = d(false);

  const f = async () => {
    if (c) {
      h(true);
      a(null);
      try {
        if (onSubmit) {
          await onSubmit(c, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: U[c],
            description: d || undefined,
          });
        }

        E(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (onClose(t)) {
          switch (t.code) {
            case l.CANNOT_REPORT_OWN_CONTENT: {
              a("Вы не можете пожаловаться на свой контент");
              break;
            }
            case l.ALREADY_REPORTED: {
              a("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case l.TARGET_NOT_FOUND: {
              a("Контент не найден");
              break;
            }
            case l.DESCRIPTION_TOO_LONG: {
              a("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              a("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          a("Произошла ошибка при отправке жалобы");
        }
      } finally {
        h(false);
      }
    }
  };

  return _
    ? u(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: u("div", {
          className: s.content,
          children: [
            u("div", {
              className: s.successIcon,
              children: u(I_1, { size: 48 }),
            }),
            u("h2", { className: s.title, children: "Спасибо за жалобу!" }),
            u("p", {
              className: s.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            u("div", {
              className: s.actions,
              children: u(B, {
                variant: "primary",
                onClick: (t) => {
                  t.stopPropagation();
                  onClose();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : u(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: u("div", {
          className: s.content,
          children: [
            u("h2", { className: s.title, children: "Пожаловаться" }),
            u("p", {
              className: s.subtitle,
              children: "Выберите причину жалобы",
            }),
            u("div", {
              className: s.options,
              children: W.map((t) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${c === t.id ? s.chipActive : ""}`,
                    onClick: () => T(t.id),
                    children: [
                      u("span", {
                        className: s.radio,
                        children:
                          c === t.id && u("span", { className: s.radioDot }),
                      }),
                      t.label,
                    ],
                  },
                  t.id
                )
              ),
            }),
            u("div", {
              className: s.detailsSection,
              children: u("textarea", {
                className: s.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (t) => u(t.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            O && u("div", { className: s.error, children: O }),
            u("div", {
              className: s.actions,
              children: [
                u(B, {
                  variant: "secondary",
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                u(B, {
                  variant: "primary",
                  onClick: (t) => {
                    t.stopPropagation();
                    f();
                  },
                  disabled: !c || N,
                  children: N ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}

export { ReportModal as ReportModal, ReportModal as default };
