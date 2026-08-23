import {
  a6,
  a7,
  d,
  u,
  B as B_1,
  M as M_1,
  x as x_1,
} from "./index-DBLtLuBZ.js";
import { x_1 as x_1_1 } from "./IconCheckCircle-Czu5wphO.js";
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
      a._sentryDebugIds[i] = "2dd7c922-f24d-4b85-9ebf-8367a47f439a";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-2dd7c922-f24d-4b85-9ebf-8367a47f439a";
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
    const i = await a6.post(a7.reports.create, a);
    return i?.data ?? i;
  },
};

const P = "Esov";
const y = "stQG";
const g = "rCRp";
const S = "XOxw";
const C = "Rdul";
const w = "YHBq";
const k = "c06k";
const L = "Ba3g";
const x = "pbhK";
const G = "cWaf";
const Y = "LpLG";
const B = "mA7L";
const F = "OrXq";
const W = "QZse";

const s = {
  modalReport: P,
  content: y,
  successIcon: g,
  title: S,
  subtitle: C,
  options: w,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: Y,
  textarea: B,
  error: F,
  actions: W,
};

const H = {
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
  const [d, f] = d("");
  const [p, R] = d(false);
  const [O, c] = d(null);
  const [T, E] = d(false);

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
            reason: H[r],
            description: d || undefined,
          });
        }

        E(true);
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
        R(false);
      }
    }
  };

  return T
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
              children: M.map((t) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${r === t.id ? s.chipActive : ""}`,
                    onClick: () => u(t.id),
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
            O && u("div", { className: s.error, children: O }),
            u("div", {
              className: s.actions,
              children: [
                u(B_1, {
                  variant: "secondary",
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: p,
                  children: "Отмена",
                }),
                u(B_1, {
                  variant: "primary",
                  onClick: (t) => {
                    t.stopPropagation();
                    _();
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
