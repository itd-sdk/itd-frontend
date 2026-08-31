import {
  a6,
  a7,
  d,
  u,
  B as B_1,
  M as M_1,
  x as x_1,
} from "./index-ORJLmKGS.js";
import { I } from "./IconCheckCircle-DW3tPpgG.js";
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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "ed47ec7a-cd87-44d9-bcd8-aef4020a8171";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-ed47ec7a-cd87-44d9-bcd8-aef4020a8171";
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

const D = "WZEH";
const y = "HPWd";
const S = "cBxi";
const g = "pfWA";
const C = "vBPo";
const w = "Dnif";
const k = "n7N4";
const L = "XNS6";
const x = "Forq";
const G = "tcXv";
const W = "AaiG";
const F = "fRVc";
const B = "k0wS";
const H = "TLmO";

const a = {
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
  detailsSection: W,
  textarea: F,
  error: B,
  actions: H,
};

const Y = {
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
  const [r, u] = d(null);
  const [d, T] = d("");
  const [N, R] = d(false);
  const [m, c] = d(null);
  const [f, E] = d(false);

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
            reason: Y[r],
            description: d || undefined,
          });
        }

        E(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (x_1(s)) {
          switch (s.code) {
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
        className: a.modalReport,
        children: u("div", {
          className: a.content,
          children: [
            u("div", {
              className: a.successIcon,
              children: u(I, { size: 48 }),
            }),
            u("h2", { className: a.title, children: "Спасибо за жалобу!" }),
            u("p", {
              className: a.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            u("div", {
              className: a.actions,
              children: u(B_1, {
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
    : u(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: a.modalReport,
        children: u("div", {
          className: a.content,
          children: [
            u("h2", { className: a.title, children: "Пожаловаться" }),
            u("p", {
              className: a.subtitle,
              children: "Выберите причину жалобы",
            }),
            u("div", {
              className: a.options,
              children: M.map((s) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${r === s.id ? a.chipActive : ""}`,
                    onClick: () => u(s.id),
                    children: [
                      u("span", {
                        className: a.radio,
                        children:
                          r === s.id && u("span", { className: a.radioDot }),
                      }),
                      s.label,
                    ],
                  },
                  s.id
                )
              ),
            }),
            u("div", {
              className: a.detailsSection,
              children: u("textarea", {
                className: a.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (s) => T(s.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            m && u("div", { className: a.error, children: m }),
            u("div", {
              className: a.actions,
              children: [
                u(B_1, {
                  variant: "secondary",
                  onClick: (s) => {
                    s.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                u(B_1, {
                  variant: "primary",
                  onClick: (s) => {
                    s.stopPropagation();
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
