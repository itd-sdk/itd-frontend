import {
  U as U_1,
  V,
  d,
  u,
  B as B_1,
  aq,
  g as g_1,
  an,
} from "./index-4a2211963806.js";
import { I } from "./IconCheckCircle-9399731a0f7e.js";

const l = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const D = {
  async createReport(n) {
    const r = await U_1.post(V.reports.create, n);
    return r?.data ?? r;
  },
};

const C = "bIN8";
const S = "pw6t";
const k = "L1bq";
const y = "BUli";
const L = "kKd2";
const w = "vHwV";
const g = "xErm";
const x = "YVkQ";
const G = "oq6h";
const U = "ZMl4";
const q = "XZPN";
const F = "aqdL";
const W = "PWED";
const Y = "URh5";

const a = {
  modalReport: C,
  content: S,
  successIcon: k,
  title: y,
  subtitle: L,
  options: w,
  chip: g,
  radio: x,
  chipActive: G,
  radioDot: U,
  detailsSection: q,
  textarea: F,
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

const H = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
  const [i, T] = d(null);
  const [d, u] = d("");
  const [N, m] = d(false);
  const [O, t] = d(null);
  const [E, _] = d(false);

  const b = async () => {
    if (i) {
      m(true);
      t(null);
      try {
        if (onSubmit) {
          await onSubmit(i, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: B[i],
            description: d || undefined,
          });
        }

        _(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (an(s)) {
          switch (s.code) {
            case l.CANNOT_REPORT_OWN_CONTENT: {
              t("Вы не можете пожаловаться на свой контент");
              break;
            }
            case l.ALREADY_REPORTED: {
              t("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case l.TARGET_NOT_FOUND: {
              t("Контент не найден");
              break;
            }
            case l.DESCRIPTION_TOO_LONG: {
              t("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              t("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          t("Произошла ошибка при отправке жалобы");
        }
      } finally {
        m(false);
      }
    }
  };

  return E
    ? u(aq, {
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
    : u(aq, {
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
              children: H.map((s) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${a.chip} ${i === s.id ? a.chipActive : ""}`,
                    onClick: () => T(s.id),
                    children: [
                      u("span", {
                        className: a.radio,
                        children:
                          i === s.id && u("span", { className: a.radioDot }),
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
                onInput: (s) => u(s.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            u(g_1, {}),
            O && u("div", { className: a.error, children: O }),
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
                    b();
                  },
                  disabled: !i || N,
                  children: N ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}

export { ReportModal as ReportModal, ReportModal as default };
