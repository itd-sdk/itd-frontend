import { a2, a3, d, a as a_1, B, M as M_1, a8 } from "./index-DDCL-vHK.js";
import { a8 as a8_1 } from "./IconCheckCircle-DsXIWG-y.js";
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
    t.SENTRY_RELEASE = { id: "1.1.0" };
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "d5ab378f-d8a0-4f03-aed0-5769b260a376";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-d5ab378f-d8a0-4f03-aed0-5769b260a376";
    }
  } catch {}
})();

const l = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const A = {
  async createReport(t) {
    const i = await a2.post(a3.reports.create, t);
    return i?.data ?? i;
  },
};

const P = "x5Z9";
const y = "fYND";
const g = "BdOL";
const S = "rk16";
const C = "bUXo";
const k = "gVLl";
const w = "iRUK";
const L = "nTMo";
const x = "q4v5";
const G = "HEhM";
const Y = "NkHT";
const M = "nzQ0";
const U = "szso";
const F = "tYhx";

const a = {
  modalReport: P,
  content: y,
  successIcon: g,
  title: S,
  subtitle: C,
  options: k,
  chip: w,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: Y,
  textarea: M,
  error: U,
  actions: F,
};

const H = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const z = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
  const [o, u] = d(null);
  const [d, T] = d("");
  const [N, R] = d(false);
  const [O, r] = d(null);
  const [f, E] = d(false);

  const _ = async () => {
    if (o) {
      R(true);
      r(null);
      try {
        if (onSubmit) {
          await onSubmit(o, d);
        } else {
          await A.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: H[o],
            description: d || undefined,
          });
        }

        E(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (a8(s)) {
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
        R(false);
      }
    }
  };

  return f
    ? a_1(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: a.modalReport,
        children: a_1("div", {
          className: a.content,
          children: [
            a_1("div", {
              className: a.successIcon,
              children: a_1(a8_1, { size: 48 }),
            }),
            a_1("h2", { className: a.title, children: "Спасибо за жалобу!" }),
            a_1("p", {
              className: a.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            a_1("div", {
              className: a.actions,
              children: a_1(B, {
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
    : a_1(M_1, {
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
              children: z.map((s) =>
                a_1(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${o === s.id ? a.chipActive : ""}`,
                    onClick: () => u(s.id),
                    children: [
                      a_1("span", {
                        className: a.radio,
                        children:
                          o === s.id && a_1("span", { className: a.radioDot }),
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
                onInput: (s) => T(s.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            O && a_1("div", { className: a.error, children: O }),
            a_1("div", {
              className: a.actions,
              children: [
                a_1(B, {
                  variant: "secondary",
                  onClick: (s) => {
                    s.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                a_1(B, {
                  variant: "primary",
                  onClick: (s) => {
                    s.stopPropagation();
                    _();
                  },
                  disabled: !o || N,
                  children: N ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}

export { ReportModal as ReportModal, ReportModal as default };
