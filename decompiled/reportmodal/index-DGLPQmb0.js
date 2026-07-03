import {
  a5,
  a6,
  d,
  a as a_1,
  B as B_1,
  M as M_1,
  ab,
} from "./index-DuQT229k.js";
import { a6 as a6_1 } from "./IconCheckCircle-z77mfT7n.js";
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
      t._sentryDebugIds[i] = "4b5e6acb-a563-4a6d-b499-4efde3a1c239";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-4b5e6acb-a563-4a6d-b499-4efde3a1c239";
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
  async createReport(t) {
    const i = await a5.post(a6.reports.create, t);
    return i?.data ?? i;
  },
};

const A = "nC4t";
const P = "t7yy";
const S = "qk7q";
const g = "lcJy";
const C = "YbB5";
const w = "Dv9d";
const k = "f2wf";
const L = "JcTR";
const x = "MNMi";
const G = "co8w";
const M = "fSzg";
const Y = "DN9z";
const z = "f9zk";
const F = "OIZL";

const a = {
  modalReport: A,
  content: P,
  successIcon: S,
  title: g,
  subtitle: C,
  options: w,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: M,
  textarea: Y,
  error: z,
  actions: F,
};

const B = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const U = [
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
  const [O, c] = d(null);
  const [f, b] = d(false);

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

        b(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (ab(s)) {
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
              children: a_1(a6_1, { size: 48 }),
            }),
            a_1("h2", { className: a.title, children: "Спасибо за жалобу!" }),
            a_1("p", {
              className: a.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            a_1("div", {
              className: a.actions,
              children: a_1(B_1, {
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
              children: U.map((s) =>
                a_1(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${r === s.id ? a.chipActive : ""}`,
                    onClick: () => u(s.id),
                    children: [
                      a_1("span", {
                        className: a.radio,
                        children:
                          r === s.id && a_1("span", { className: a.radioDot }),
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
                a_1(B_1, {
                  variant: "secondary",
                  onClick: (s) => {
                    s.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                a_1(B_1, {
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
