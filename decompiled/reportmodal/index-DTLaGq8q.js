import { an, ao, d, u, B as B_1, M, K } from "./index-BuVp7kGl.js";
import { ao as ao_1 } from "./IconCheckCircle-4L9NAj9I.js";
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
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "97d4d350-d963-49f3-aebf-f56c42f9abda";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-97d4d350-d963-49f3-aebf-f56c42f9abda";
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
  async createReport(t) {
    const i = await an.post(ao.reports.create, t);
    return i?.data ?? i;
  },
};

const D = "uSUs";
const y = "Yvt6";
const S = "z50U";
const g = "jl5T";
const C = "oglb";
const w = "mXA9";
const k = "lrgu";
const L = "BuxS";
const x = "awIl";
const G = "N3K0";
const U = "SUmX";
const W = "WpW5";
const Y = "g0JP";
const F = "JzIX";

const s = {
  modalReport: D,
  content: y,
  successIcon: S,
  title: g,
  subtitle: C,
  options: w,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: U,
  textarea: W,
  error: Y,
  actions: F,
};

const z = {
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
  const [r, O] = d(null);
  const [d, f] = d("");
  const [N, h] = d(false);
  const [m, c] = d(null);
  const [T, _] = d(false);

  const b = async () => {
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
            reason: z[r],
            description: d || undefined,
          });
        }

        _(true);
      } catch (a) {
        console.error("Failed to submit report:", a);

        if (K(a)) {
          switch (a.code) {
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

  return T
    ? onSubmit(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: onSubmit("div", {
          className: s.content,
          children: [
            onSubmit("div", {
              className: s.successIcon,
              children: onSubmit(ao_1, { size: 48 }),
            }),
            onSubmit("h2", {
              className: s.title,
              children: "Спасибо за жалобу!",
            }),
            onSubmit("p", {
              className: s.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            onSubmit("div", {
              className: s.actions,
              children: onSubmit(B_1, {
                variant: "primary",
                onClick: (a) => {
                  a.stopPropagation();
                  onClose();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : onSubmit(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: onSubmit("div", {
          className: s.content,
          children: [
            onSubmit("h2", { className: s.title, children: "Пожаловаться" }),
            onSubmit("p", {
              className: s.subtitle,
              children: "Выберите причину жалобы",
            }),
            onSubmit("div", {
              className: s.options,
              children: B.map((a) =>
                onSubmit(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${r === a.id ? s.chipActive : ""}`,
                    onClick: () => O(a.id),
                    children: [
                      onSubmit("span", {
                        className: s.radio,
                        children:
                          r === a.id &&
                          onSubmit("span", { className: s.radioDot }),
                      }),
                      a.label,
                    ],
                  },
                  a.id
                )
              ),
            }),
            onSubmit("div", {
              className: s.detailsSection,
              children: onSubmit("textarea", {
                className: s.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (a) => f(a.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            m && onSubmit("div", { className: s.error, children: m }),
            onSubmit("div", {
              className: s.actions,
              children: [
                onSubmit(B_1, {
                  variant: "secondary",
                  onClick: (a) => {
                    a.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                onSubmit(B_1, {
                  variant: "primary",
                  onClick: (a) => {
                    a.stopPropagation();
                    b();
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
