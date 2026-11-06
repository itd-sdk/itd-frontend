import { Q, W as W_1, d, u, B as B_1, M, d as d_1 } from "./index-CR_1arh8.js";
import { W_1 as W_1_1 } from "./IconCheckCircle-BP2hymRw.js";
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
    const c = new a.Error().stack;

    if (c) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[c] = "5487c5a2-f6cf-4c98-9df8-1397dfb4d613";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-5487c5a2-f6cf-4c98-9df8-1397dfb4d613";
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
  async createReport(a) {
    const c = await Q.post(W_1.reports.create, a);
    return c?.data ?? c;
  },
};

const v = "jRI2";
const y = "s4Y3";
const C = "DcWb";
const g = "p29G";
const S = "kVJG";
const k = "nnyA";
const w = "WAqP";
const G = "kWOQ";
const L = "CzWs";
const W = "kY3P";
const x = "Icnw";
const Y = "BuoC";
const B = "DHPz";
const F = "gCBj";

const s = {
  modalReport: v,
  content: y,
  successIcon: C,
  title: g,
  subtitle: S,
  options: k,
  chip: w,
  radio: G,
  chipActive: L,
  radioDot: W,
  detailsSection: x,
  textarea: Y,
  error: B,
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
  const [d, f] = d("");
  const [N, R] = d(false);
  const [u, i] = d(null);
  const [T, _] = d(false);

  const E = async () => {
    if (r) {
      R(true);
      i(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: z[r],
            description: d || undefined,
          });
        }

        _(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (d_1(t)) {
          switch (t.code) {
            case l.CANNOT_REPORT_OWN_CONTENT: {
              i("Вы не можете пожаловаться на свой контент");
              break;
            }
            case l.ALREADY_REPORTED: {
              i("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case l.TARGET_NOT_FOUND: {
              i("Контент не найден");
              break;
            }
            case l.DESCRIPTION_TOO_LONG: {
              i("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              i("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          i("Произошла ошибка при отправке жалобы");
        }
      } finally {
        R(false);
      }
    }
  };

  return T
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
              children: u(W_1_1, { size: 48 }),
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
              children: H.map((t) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${r === t.id ? s.chipActive : ""}`,
                    onClick: () => m(t.id),
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
                onInput: (t) => f(t.target.value),
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
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                u(B_1, {
                  variant: "primary",
                  onClick: (t) => {
                    t.stopPropagation();
                    E();
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
