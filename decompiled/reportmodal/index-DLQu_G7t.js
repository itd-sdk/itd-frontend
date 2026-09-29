import { an, ao, d, u, B, M as M_1, K as K_1 } from "./index-D4QRo1-7.js";
import { I } from "./IconCheckCircle-CykOWOHH.js";
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
      a._sentryDebugIds[i] = "ee6de3cb-8d4e-46b4-ab21-48d06d7537dd";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-ee6de3cb-8d4e-46b4-ab21-48d06d7537dd";
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
    const i = await an.post(ao.reports.create, a);
    return i?.data ?? i;
  },
};

const A = "WMhY";
const y = "RjtX";
const S = "bDdO";
const g = "PErD";
const C = "Uf74";
const k = "pYeo";
const w = "WUqv";
const L = "cFkK";
const x = "OsKo";
const G = "Rnj7";
const W = "LtDT";
const Y = "ZrNZ";
const F = "kRj8";
const U = "KVeW";

const s = {
  modalReport: A,
  content: y,
  successIcon: S,
  title: g,
  subtitle: C,
  options: k,
  chip: w,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: W,
  textarea: Y,
  error: F,
  actions: U,
};

const K = {
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
  const [N, h] = d(false);
  const [O, c] = d(null);
  const [b, E] = d(false);

  const _ = async () => {
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
            reason: K[r],
            description: d || undefined,
          });
        }

        E(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (K_1(t)) {
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
        h(false);
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
              children: u(I, { size: 48 }),
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
                onInput: (t) => T(t.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            O && u("div", { className: s.error, children: O }),
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
