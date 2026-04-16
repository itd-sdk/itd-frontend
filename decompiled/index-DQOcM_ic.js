import { a_1 as e_1, c, K as K_1, a as a_1, Q, M } from "./index-B0np_7Xy.js";
const C = "sQUEsdy-";
const S = "kK8dKNqj";
const a = { createPostModal: C, title: S };
function K({ wallOwnerId: r, placeholder: l, onPostCreated: c }) {
  const { closeModal: s } = e_1();

  const o = c((t) => t.profile);

  const n = K_1((t) => t.createPost);

  const d = async (t, i, u, m) => {
    if (!o) {
      return;
    }
    const M = r ?? o.id;
    await n({ wallOwnerId: M, text: t, spans: i, attachments: u, poll: m });
    await c?.();
    s();
  };

  return a_1(M, {
    frameless: true,
    onClose: s,
    className: a.createPostModal,
    children: [
      a_1("h2", { className: a.title, children: "Создать пост" }),
      a_1(Q, { onSubmit: d, autoFocus: true, placeholder: l }),
    ],
  });
}
export { K as C };
