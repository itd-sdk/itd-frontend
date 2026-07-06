import {
  a5,
  a6,
  d,
  a as a_1,
  ReportModal as ReportModal_1,
  M as M_1,
  ab,
} from "./index-CFv_0Hh6.js";
import { a6 as a6_1 } from "./IconCheckCircle-BeRqMAqi.js";
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
    const c = new t.Error().stack;

    if (c) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[c] = "dda6d2b5-7cf9-4f0d-9491-a3ec2377aa4b";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-dda6d2b5-7cf9-4f0d-9491-a3ec2377aa4b";
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
    const c = await a5.post(a6.reports.create, t);
    return c?.data ?? c;
  },
};

const y = "MIyM";
const A = "tkn5";
const S = "zEcY";
const g = "z2Fb";
const w = "rktq";
const C = "OG5r";
const k = "cPzN";
const L = "wSHq";
const x = "vcYx";
const G = "NZKq";
const Y = "s0co";
const F = "msks";
const M = "ihcq";
const q = "gjDw";

const a = {
  modalReport: y,
  content: A,
  successIcon: S,
  title: g,
  subtitle: w,
  options: C,
  chip: k,
  radio: L,
  chipActive: x,
  radioDot: G,
  detailsSection: Y,
  textarea: F,
  error: M,
  actions: q,
};

const z = {
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
  const [r, u] = d(null);
  const [d, T] = d("");
  const [N, m] = d(false);
  const [O, i] = d(null);
  const [f, b] = d(false);

  const E = async () => {
    if (r) {
      m(true);
      i(null);
      try {
        if (onSubmit) {
          await onSubmit(r, d);
        } else {
          await P.createReport({
            targetType: targetType,
            targetId: targetId,
            reason: z[r],
            description: d || undefined,
          });
        }

        b(true);
      } catch (s) {
        console.error("Failed to submit report:", s);

        if (ab(s)) {
          switch (s.code) {
            case l.CANNOT_REPORT_OWN_CONTENT: {
              i("Вы не можете пожаловаться на свой контент");
              break;
            }
            case l.ALREADY_REPORTED: {
              i("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case l.TARGET_NOT_FOUND: {
              i("Контент не найден");
              break;
            }
            case l.DESCRIPTION_TOO_LONG: {
              i("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              i("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          i("Произошла ошибка при отправке жалобы");
        }
      } finally {
        m(false);
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
              children: a_1(ReportModal_1, {
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
              children: H.map((s) =>
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
                a_1(ReportModal_1, {
                  variant: "secondary",
                  onClick: (s) => {
                    s.stopPropagation();
                    onClose();
                  },
                  disabled: N,
                  children: "Отмена",
                }),
                a_1(ReportModal_1, {
                  variant: "primary",
                  onClick: (s) => {
                    s.stopPropagation();
                    E();
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
