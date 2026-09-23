import {
  a9,
  aa,
  d,
  M_1 as u_1,
  B as B_1,
  M as M_1,
  r,
} from "./index-B74jCtUp.js";
import { aa as aa_1 } from "./IconCheckCircle-dQMUHu9c.js";
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
      t._sentryDebugIds[i] = "f18652ba-530d-4604-baf9-a17d01fa5206";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-f18652ba-530d-4604-baf9-a17d01fa5206";
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
    const i = await a9.post(aa.reports.create, t);
    return i?.data ?? i;
  },
};

const P = "CKO6";
const y = "dVT6";
const g = "WQUp";
const S = "DfdZ";
const C = "gkIK";
const w = "TJly";
const k = "WlPQ";
const L = "pfE1";
const x = "Tw4A";
const G = "h1kD";
const F = "F5uX";
const W = "s3vE";
const M = "TpNO";
const U = "BMjX";

const a = {
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
  detailsSection: F,
  textarea: W,
  error: M,
  actions: U,
};

const Y = {
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
  const [c, R] = d(null);
  const [d, m] = d("");
  const [p, O] = d(false);
  const [T, r] = d(null);
  const [f, E] = d(false);

  const _ = async () => {
    if (c) {
      O(true);
      r(null);
      try {
        if (onSubmit) {
          await onSubmit(c, d);
        } else {
          await A.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: Y[c],
            description: d || undefined,
          });
        }

        E(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (r(s)) {
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
        O(false);
      }
    }
  };

  return f
    ? u_1(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: a.modalReport,
        children: u_1("div", {
          className: a.content,
          children: [
            u_1("div", {
              className: a.successIcon,
              children: u_1(aa_1, { size: 48 }),
            }),
            u_1("h2", { className: a.title, children: "Спасибо за жалобу!" }),
            u_1("p", {
              className: a.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            u_1("div", {
              className: a.actions,
              children: u_1(B_1, {
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
    : u_1(M_1, {
        onClose: onClose,
        showHeader: false,
        frameless: false,
        className: a.modalReport,
        children: u_1("div", {
          className: a.content,
          children: [
            u_1("h2", { className: a.title, children: "Пожаловаться" }),
            u_1("p", {
              className: a.subtitle,
              children: "Выберите причину жалобы",
            }),
            u_1("div", {
              className: a.options,
              children: B.map((s) =>
                u_1(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${c === s.id ? a.chipActive : ""}`,
                    onClick: () => R(s.id),
                    children: [
                      u_1("span", {
                        className: a.radio,
                        children:
                          c === s.id && u_1("span", { className: a.radioDot }),
                      }),
                      s.label,
                    ],
                  },
                  s.id
                )
              ),
            }),
            u_1("div", {
              className: a.detailsSection,
              children: u_1("textarea", {
                className: a.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: d,
                onInput: (s) => m(s.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            T && u_1("div", { className: a.error, children: T }),
            u_1("div", {
              className: a.actions,
              children: [
                u_1(B_1, {
                  variant: "secondary",
                  onClick: (s) => {
                    s.stopPropagation();
                    onClose();
                  },
                  disabled: p,
                  children: "Отмена",
                }),
                u_1(B_1, {
                  variant: "primary",
                  onClick: (s) => {
                    s.stopPropagation();
                    _();
                  },
                  disabled: !c || p,
                  children: p ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}

export { ReportModal as ReportModal, ReportModal as default };
