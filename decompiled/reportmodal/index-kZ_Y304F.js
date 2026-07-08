import { a5, a6, d, a, B as B_1, M, ab } from "./index-BewGW5_v.js";
import { a6 as a6_1 } from "./IconCheckCircle-CkswSG88.js";
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new a.Error().stack;

    if (i) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[i] = "b184bc9b-60a6-4faf-b5fb-90311d10c0f2";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-b184bc9b-60a6-4faf-b5fb-90311d10c0f2";
    }
  } catch {}
})();

const l = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const P = {
  async createReport(a) {
    const i = await a5.post(a6.reports.create, a);
    return i?.data ?? i;
  },
};

const A = "xPbQ";
const y = "gjKP";
const g = "FtdZ";
const S = "prA1";
const C = "fDp7";
const w = "Z3jW";
const k = "yD0x";
const x = "YzEt";
const L = "fUHI";
const F = "cJ1c";
const G = "dIpI";
const Y = "vF6r";
const U = "QfQc";
const W = "CTbB";

const s = {
  modalReport: A,
  content: y,
  successIcon: g,
  title: S,
  subtitle: C,
  options: w,
  chip: k,
  radio: x,
  chipActive: L,
  radioDot: F,
  detailsSection: G,
  textarea: Y,
  error: U,
  actions: W,
};

const B = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const H = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
  const [r, m] = d(null);
  const [d, u] = d("");
  const [p, h] = d(false);
  const [b, c] = d(null);
  const [O, T] = d(false);

  const E = async () => {
    if (r) {
      h(true);
      c(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await P.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: B[r],
            description: d || undefined,
          });
        }

        T(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (ab(t)) {
          switch (t.code) {
            case l.CANNOT_REPORT_OWN_CONTENT: {
              c("Вы не можете пожаловаться на свой контент");
              break;
            }
            case l.ALREADY_REPORTED: {
              c("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case l.TARGET_NOT_FOUND: {
              c("Контент не найден");
              break;
            }
            case l.DESCRIPTION_TOO_LONG: {
              c("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              c("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          c("Произошла ошибка при отправке жалобы");
        }
      } finally {
        h(false);
      }
    }
  };

  return O
    ? targetType(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: targetType("div", {
          className: s.content,
          children: [
            targetType("div", {
              className: s.successIcon,
              children: targetType(a6_1, { size: 48 }),
            }),
            targetType("h2", {
              className: s.title,
              children: "Спасибо за жалобу!",
            }),
            targetType("p", {
              className: s.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            targetType("div", {
              className: s.actions,
              children: targetType(B_1, {
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
    : targetType(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: targetType("div", {
          className: s.content,
          children: [
            targetType("h2", { className: s.title, children: "Пожаловаться" }),
            targetType("p", {
              className: s.subtitle,
              children: "Выберите причину жалобы",
            }),
            targetType("div", {
              className: s.options,
              children: H.map((t) =>
                targetType(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${r === t.id ? s.chipActive : ""}`,
                    onClick: () => m(t.id),
                    children: [
                      targetType("span", {
                        className: s.radio,
                        children:
                          r === t.id &&
                          targetType("span", { className: s.radioDot }),
                      }),
                      t.label,
                    ],
                  },
                  t.id
                )
              ),
            }),
            targetType("div", {
              className: s.detailsSection,
              children: targetType("textarea", {
                className: s.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (t) => u(t.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            b && targetType("div", { className: s.error, children: b }),
            targetType("div", {
              className: s.actions,
              children: [
                targetType(B_1, {
                  variant: "secondary",
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: p,
                  children: "Отмена",
                }),
                targetType(B_1, {
                  variant: "primary",
                  onClick: (t) => {
                    t.stopPropagation();
                    E();
                  },
                  disabled: !r || p,
                  children: p ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}

export { ReportModal as ReportModal, ReportModal as default };
