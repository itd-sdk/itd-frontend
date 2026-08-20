import { a6, a7, d, u, B, M as M_1, x as x_1 } from "./index-DDTOXJaD.js";
import { a7 as a7_1 } from "./IconCheckCircle-D2LuwgVw.js";
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
      a._sentryDebugIds[i] = "22abd363-c197-4fb6-9408-5db58736400f";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-22abd363-c197-4fb6-9408-5db58736400f";
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
    const i = await a6.post(a7.reports.create, a);
    return i?.data ?? i;
  },
};

const A = "d8Nb";
const D = "VL4C";
const g = "g44F";
const S = "em16";
const C = "M990";
const w = "bs5L";
const k = "ICPH";
const L = "u5z0";
const x = "aXiy";
const F = "geV0";
const G = "sFOJ";
const M = "xHXy";
const H = "SmsM";
const Y = "ddN9";

const s = {
  modalReport: A,
  content: D,
  successIcon: g,
  title: S,
  subtitle: C,
  options: w,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: F,
  detailsSection: G,
  textarea: M,
  error: H,
  actions: Y,
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
  const [r, R] = d(null);
  const [d, T] = d("");
  const [N, m] = d(false);
  const [u, c] = d(null);
  const [b, f] = d(false);

  const _ = async () => {
    if (r) {
      m(true);
      c(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await P.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: U[r],
            description: d || undefined,
          });
        }

        f(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (x_1(t)) {
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
        m(false);
      }
    }
  };

  return b
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
              children: u(a7_1, { size: 48 }),
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
                    className: `${s.chip} ${r === t.id ? s.chipActive : ""}`,
                    onClick: () => R(t.id),
                    children: [
                      u("span", {
                        className: s.radio,
                        children:
                          r === t.id && u("span", { className: s.radioDot }),
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
                onInput: (t) => T(t.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            u && u("div", { className: s.error, children: u }),
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
