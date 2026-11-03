import {
  Q,
  R,
  d,
  M_1 as u_1,
  B as B_1,
  M as M_1,
  o,
} from "./index-GOT6tyDH.js";
import { o as o_1 } from "./IconCheckCircle-CjvHQc8H.js";
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
      a._sentryDebugIds[i] = "54142241-78ef-45bd-b46a-d5fe24979df9";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-54142241-78ef-45bd-b46a-d5fe24979df9";
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
    const i = await Q.post(R.reports.create, a);
    return i?.data ?? i;
  },
};

const A = "cB30";
const y = "MW3t";
const S = "CoN1";
const g = "LxpN";
const C = "N4D9";
const w = "H2K9";
const k = "n6rQ";
const L = "linG";
const x = "PSmM";
const G = "ZiF8";
const F = "JEQN";
const M = "PBq5";
const B = "G7L2";
const W = "x4P0";

const s = {
  modalReport: A,
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
  textarea: M,
  error: B,
  actions: W,
};

const Y = {
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
  const [c, O] = d(null);
  const [d, T] = d("");
  const [N, R] = d(false);
  const [m, r] = d(null);
  const [f, E] = d(false);

  const _ = async () => {
    if (c) {
      R(true);
      r(null);
      try {
        if (onSubmit) {
          await onSubmit(c, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: Y[c],
            description: d || undefined,
          });
        }

        E(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (onClose(t)) {
          switch (t.code) {
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
    ? u_1(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: u_1("div", {
          className: s.content,
          children: [
            u_1("div", {
              className: s.successIcon,
              children: u_1(o_1, { size: 48 }),
            }),
            u_1("h2", { className: s.title, children: "Спасибо за жалобу!" }),
            u_1("p", {
              className: s.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            u_1("div", {
              className: s.actions,
              children: u_1(B_1, {
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
    : u_1(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: u_1("div", {
          className: s.content,
          children: [
            u_1("h2", { className: s.title, children: "Пожаловаться" }),
            u_1("p", {
              className: s.subtitle,
              children: "Выберите причину жалобы",
            }),
            u_1("div", {
              className: s.options,
              children: H.map((t) =>
                u_1(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${c === t.id ? s.chipActive : ""}`,
                    onClick: () => O(t.id),
                    children: [
                      u_1("span", {
                        className: s.radio,
                        children:
                          c === t.id && u_1("span", { className: s.radioDot }),
                      }),
                      t.label,
                    ],
                  },
                  t.id
                )
              ),
            }),
            u_1("div", {
              className: s.detailsSection,
              children: u_1("textarea", {
                className: s.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (t) => T(t.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            m && u_1("div", { className: s.error, children: m }),
            u_1("div", {
              className: s.actions,
              children: [
                u_1(B_1, {
                  variant: "secondary",
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                u_1(B_1, {
                  variant: "primary",
                  onClick: (t) => {
                    t.stopPropagation();
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
