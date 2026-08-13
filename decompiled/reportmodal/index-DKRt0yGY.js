import { a6, a7, d, u, B as B_1, M, x as x_1 } from "./index-B9FitUXy.js";
import { x_1 as x_1_1 } from "./IconCheckCircle-DTjbRj58.js";
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
      t._sentryDebugIds[i] = "2e6818e2-40aa-47a7-b990-f40c54841b7c";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-2e6818e2-40aa-47a7-b990-f40c54841b7c";
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
    const i = await a6.post(a7.reports.create, t);
    return i?.data ?? i;
  },
};

const y = "g8XS";
const D = "AYTc";
const S = "PsZ2";
const g = "LUwQ";
const w = "d9Zf";
const C = "wdBo";
const k = "ZuXy";
const L = "VdOO";
const x = "LkW8";
const G = "hjhB";
const Y = "vwX3";
const B = "rv5i";
const F = "wZ3d";
const U = "V4nE";

const s = {
  modalReport: y,
  content: D,
  successIcon: S,
  title: g,
  subtitle: w,
  options: C,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: Y,
  textarea: B,
  error: F,
  actions: U,
};

const W = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const Z = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
  const [r, m] = d(null);
  const [d, T] = d("");
  const [N, O] = d(false);
  const [u, c] = d(null);
  const [f, E] = d(false);

  const _ = async () => {
    if (r) {
      O(true);
      c(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await P.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: W[r],
            description: d || undefined,
          });
        }

        E(true);
      } catch (a) {
        console.error("Failed to submit report:", a);

        if (x_1(a)) {
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
        O(false);
      }
    }
  };

  return f
    ? u(M, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: u("div", {
          className: s.content,
          children: [
            u("div", {
              className: s.successIcon,
              children: u(x_1_1, { size: 48 }),
            }),
            u("h2", { className: s.title, children: "Спасибо за жалобу!" }),
            u("p", {
              className: s.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            u("div", {
              className: s.actions,
              children: u(B_1, {
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
    : u(M, {
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
              children: Z.map((a) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${r === a.id ? s.chipActive : ""}`,
                    onClick: () => m(a.id),
                    children: [
                      u("span", {
                        className: s.radio,
                        children:
                          r === a.id && u("span", { className: s.radioDot }),
                      }),
                      a.label,
                    ],
                  },
                  a.id
                )
              ),
            }),
            u("div", {
              className: s.detailsSection,
              children: u("textarea", {
                className: s.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (a) => T(a.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            u && u("div", { className: s.error, children: u }),
            u("div", {
              className: s.actions,
              children: [
                u(B_1, {
                  variant: "secondary",
                  onClick: (a) => {
                    a.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                u(B_1, {
                  variant: "primary",
                  onClick: (a) => {
                    a.stopPropagation();
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
