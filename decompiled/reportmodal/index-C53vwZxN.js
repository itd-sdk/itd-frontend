import { a5, a6, d, a, B as B_1, M as M_1, ab } from "./index-BAlLDjSl.js";
import { a6 as a6_1 } from "./IconCheckCircle-CZy0eBff.js";
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
    a.SENTRY_RELEASE = { id: "1.1.1" };
    const i = new a.Error().stack;

    if (i) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[i] = "cf5e350f-57f8-4850-9bb4-e692fe4890dc";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-cf5e350f-57f8-4850-9bb4-e692fe4890dc";
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

const A = "HbgT";
const y = "gQeg";
const g = "ag2d";
const S = "e1qj";
const C = "LkDc";
const w = "NXzS";
const k = "wcTr";
const L = "IRDW";
const x = "Ibce";
const G = "BLQf";
const W = "ebYW";
const Y = "snPd";
const F = "IfK9";
const M = "Nt7M";

const s = {
  modalReport: A,
  content: y,
  successIcon: g,
  title: S,
  subtitle: C,
  options: w,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: W,
  textarea: Y,
  error: F,
  actions: M,
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
  const [r, u] = d(null);
  const [d, O] = d("");
  const [N, R] = d(false);
  const [f, c] = d(null);
  const [T, b] = d(false);

  const _ = async () => {
    if (r) {
      R(true);
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

        b(true);
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
        R(false);
      }
    }
  };

  return T
    ? targetType(M_1, {
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
    : targetType(M_1, {
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
                    onClick: () => u(t.id),
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
                onInput: (t) => O(t.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            f && targetType("div", { className: s.error, children: f }),
            targetType("div", {
              className: s.actions,
              children: [
                targetType(B_1, {
                  variant: "secondary",
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                targetType(B_1, {
                  variant: "primary",
                  onClick: (t) => {
                    t.stopPropagation();
                    _();
                  },
                  disabled: !r || N,
                  children: N ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}

export { ReportModal as ReportModal, ReportModal as default };
