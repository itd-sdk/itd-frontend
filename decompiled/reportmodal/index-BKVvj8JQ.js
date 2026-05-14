import {
  a4,
  a5,
  d,
  a as a_1,
  B as B_1,
  M as M_1,
  aa,
} from "./index-7xRaK15k.js";
import { a5 as a5_1 } from "./IconCheckCircle-CQ_cymiq.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "15b0ed10-018e-4de5-bf67-ac86ca34570a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-15b0ed10-018e-4de5-bf67-ac86ca34570a";
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
    const i = await a4.post(a5.reports.create, t);
    return i?.data ?? i;
  },
};

const y = "AkID";
const P = "BnuH";
const S = "hXxj";
const g = "OUOL";
const C = "ybML";
const k = "hGow";
const w = "VQ36";
const L = "Ui9f";
const x = "n2x2";
const G = "WVOk";
const F = "WF82";
const M = "TkL9";
const U = "Y6LM";
const W = "pn3G";

const a = {
  modalReport: y,
  content: P,
  successIcon: S,
  title: g,
  subtitle: C,
  options: k,
  chip: w,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: F,
  textarea: M,
  error: U,
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

const B = [
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
  const [N, O] = d(false);
  const [u, c] = d(null);
  const [f, _] = d(false);

  const b = async () => {
    if (r) {
      O(true);
      c(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: Y[r],
            description: d || undefined,
          });
        }

        _(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (aa(s)) {
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
        O(false);
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
              children: a_1(a5_1, { size: 48 }),
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
              children: B.map((s) =>
                a_1(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${r === s.id ? a.chipActive : ""}`,
                    onClick: () => m(s.id),
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
            u && a_1("div", { className: a.error, children: u }),
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
                    b();
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
