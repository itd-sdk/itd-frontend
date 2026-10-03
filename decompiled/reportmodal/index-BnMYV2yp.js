import { ao, ap, d, u, B as B_1, M as M_1, K } from "./index-DK2L49XD.js";
import { ap as ap_1 } from "./IconCheckCircle-ID7LkJzI.js";
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
      a._sentryDebugIds[i] = "947a27f7-62df-4a7d-9e5e-845d26b93d2e";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-947a27f7-62df-4a7d-9e5e-845d26b93d2e";
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
    const i = await ao.post(ap.reports.create, a);
    return i?.data ?? i;
  },
};

const y = "L36p";
const P = "NG6z";
const S = "wwYD";
const w = "S12s";
const g = "edsY";
const C = "KM8q";
const k = "myEu";
const L = "zwEM";
const x = "kWin";
const G = "x7XB";
const Y = "oQmq";
const M = "lA3d";
const F = "bEli";
const W = "dwls";

const s = {
  modalReport: y,
  content: P,
  successIcon: S,
  title: w,
  subtitle: g,
  options: C,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: Y,
  textarea: M,
  error: F,
  actions: W,
};

const z = {
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
  const [c, O] = d(null);
  const [d, T] = d("");
  const [N, m] = d(false);
  const [u, r] = d(null);
  const [E, f] = d(false);

  const _ = async () => {
    if (c) {
      m(true);
      r(null);
      try {
        if (onSubmit) {
          await onSubmit(c, d);
        } else {
          await D.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: z[c],
            description: d || undefined,
          });
        }

        f(true);
      } catch (t) {
        console.error("Failed to submit report:", t);

        if (K(t)) {
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
        m(false);
      }
    }
  };

  return E
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
              children: u(ap_1, { size: 48 }),
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
              children: B.map((t) =>
                u(
                  "button",
                  {
                    type: "button",
                    className: `${s.chip} ${c === t.id ? s.chipActive : ""}`,
                    onClick: () => O(t.id),
                    children: [
                      u("span", {
                        className: s.radio,
                        children:
                          c === t.id && u("span", { className: s.radioDot }),
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
            u && u("div", { className: s.error, children: u }),
            u("div", {
              className: s.actions,
              children: [
                u(B_1, {
                  variant: "secondary",
                  onClick: (t) => {
                    t.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                u(B_1, {
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
