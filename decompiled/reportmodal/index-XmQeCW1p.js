import {
  a6,
  a7,
  d,
  u,
  B as B_1,
  M as M_1,
  x as x_1,
} from "./index-dnACTU3c.js";
import { a7 as a7_1 } from "./IconCheckCircle-BI2tW35G.js";
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new s.Error().stack;

    if (i) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[i] = "94ac7401-d79e-481f-833d-f83b8f4abea9";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-94ac7401-d79e-481f-833d-f83b8f4abea9";
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
  async createReport(s) {
    const i = await a6.post(a7.reports.create, s);
    return i?.data ?? i;
  },
};

const y = "x13R";
const A = "h4Ey";
const g = "Dg3a";
const C = "ItCK";
const S = "XCjq";
const w = "nPnV";
const k = "INGg";
const L = "dutL";
const x = "X30P";
const G = "Cn9G";
const F = "L1Bc";
const U = "F4z7";
const W = "QtWx";
const Y = "rOUc";

const t = {
  modalReport: y,
  content: A,
  successIcon: g,
  title: C,
  subtitle: S,
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

const B = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const M = [
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
  const [N, R] = d(false);
  const [u, c] = d(null);
  const [f, E] = d(false);

  const _ = async () => {
    if (r) {
      R(true);
      c(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: B[r],
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
        R(false);
      }
    }
  };

  return f
    ? u(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: t.modalReport,
        children: u("div", {
          className: t.content,
          children: [
            u("div", {
              className: t.successIcon,
              children: u(a7_1, { size: 48 }),
            }),
            u("h2", { className: t.title, children: "Спасибо за жалобу!" }),
            u("p", {
              className: t.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            u("div", {
              className: t.actions,
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
    : u(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: t.modalReport,
        children: u("div", {
          className: t.content,
          children: [
            u("h2", { className: t.title, children: "Пожаловаться" }),
            u("p", {
              className: t.subtitle,
              children: "Выберите причину жалобы",
            }),
            u("div", {
              className: t.options,
              children: M.map((a) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${t.chip} ${r === a.id ? t.chipActive : ""}`,
                    onClick: () => m(a.id),
                    children: [
                      u("span", {
                        className: t.radio,
                        children:
                          r === a.id && u("span", { className: t.radioDot }),
                      }),
                      a.label,
                    ],
                  },
                  a.id
                )
              ),
            }),
            u("div", {
              className: t.detailsSection,
              children: u("textarea", {
                className: t.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (a) => T(a.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            u && u("div", { className: t.error, children: u }),
            u("div", {
              className: t.actions,
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
