import { a4, a5, d, a as a_1, B as B_1, M, aa } from "./index-BCnJB3wz.js";
import { a5 as a5_1 } from "./IconCheckCircle-CrO7iazj.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "6eb4a699-5cba-421b-a7ab-317d72ca69b7";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-6eb4a699-5cba-421b-a7ab-317d72ca69b7";
    }
  } catch {}
})();

const l = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const D = {
  async createReport(t) {
    const i = await a4.post(a5.reports.create, t);
    return i?.data ?? i;
  },
};

const P = "AUy8";
const y = "qqEq";
const S = "far4";
const g = "BWDE";
const C = "Qi4u";
const w = "r9ur";
const k = "lC1S";
const L = "PWE2";
const x = "SShQ";
const G = "ldaX";
const F = "F6ko";
const U = "anrh";
const W = "f4QS";
const Y = "JNU0";

const a = {
  modalReport: P,
  content: y,
  successIcon: S,
  title: g,
  subtitle: C,
  options: w,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: F,
  textarea: U,
  error: W,
  actions: Y,
};

const q = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const B = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
  const [c, O] = d(null);
  const [d, b] = d("");
  const [N, u] = d(false);
  const [R, r] = d(null);
  const [T, E] = d(false);

  const _ = async () => {
    if (c) {
      u(true);
      r(null);
      try {
        if (onSubmit) {
          await onSubmit(c, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: q[c],
            description: d || undefined,
          });
        }

        E(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (aa(s)) {
          switch (s.code) {
            case l.CANNOT_REPORT_OWN_CONTENT: {
              r("Вы не можете пожаловаться на свой контент");
              break;
            }
            case l.ALREADY_REPORTED: {
              r("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case l.TARGET_NOT_FOUND: {
              r("Контент не найден");
              break;
            }
            case l.DESCRIPTION_TOO_LONG: {
              r("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              r("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          r("Произошла ошибка при отправке жалобы");
        }
      } finally {
        u(false);
      }
    }
  };

  return T
    ? a_1(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: a.modalReport,
        children: a_1("div", {
          className: a.content,
          children: [
            a_1("div", {
              className: a.successIcon,
              children: a_1(a5_1, { size: 48 }),
            }),
            a_1("h2", { className: a.title, children: "Спасибо за жалобу!" }),
            a_1("p", {
              className: a.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            a_1("div", {
              className: a.actions,
              children: a_1(B_1, {
                variant: "primary",
                onClick: (s) => {
                  s.stopPropagation();
                  onClose();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : a_1(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: a.modalReport,
        children: a_1("div", {
          className: a.content,
          children: [
            a_1("h2", { className: a.title, children: "Пожаловаться" }),
            a_1("p", {
              className: a.subtitle,
              children: "Выберите причину жалобы",
            }),
            a_1("div", {
              className: a.options,
              children: B.map((s) =>
                a_1(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${c === s.id ? a.chipActive : ""}`,
                    onClick: () => O(s.id),
                    children: [
                      a_1("span", {
                        className: a.radio,
                        children:
                          c === s.id && a_1("span", { className: a.radioDot }),
                      }),
                      s.label,
                    ],
                  },
                  s.id
                )
              ),
            }),
            a_1("div", {
              className: a.detailsSection,
              children: a_1("textarea", {
                className: a.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (s) => b(s.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            R && a_1("div", { className: a.error, children: R }),
            a_1("div", {
              className: a.actions,
              children: [
                a_1(B_1, {
                  variant: "secondary",
                  onClick: (s) => {
                    s.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                a_1(B_1, {
                  variant: "primary",
                  onClick: (s) => {
                    s.stopPropagation();
                    _();
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
