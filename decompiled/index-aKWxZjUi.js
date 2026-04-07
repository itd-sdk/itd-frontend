import { c, b, J, u, O, M } from "./index-BzlbFDoq.js";
const p = "GcSCKwwz";
const w = "zBZFa-2a";
const a = { createPostModal: p, title: w };
function F({ wallOwnerId: r, placeholder: c, onPostCreated: l }) {
  const { closeModal: o } = c();

  const s = b((t) => t.profile);

  const n = J((t) => t.createPost);

  const i = async (t, u, d, m) => {
    if (!s) {
      return;
    }
    const M = r ?? s.id;
    await n(M, t, u, d, m);
    await l?.();
    o();
  };

  return u(M, {
    frameless: true,
    onClose: o,
    className: a.createPostModal,
    children: [
      u("h2", { className: a.title, children: "Создать пост" }),
      u(O, { onSubmit: i, autoFocus: true, placeholder: c }),
    ],
  });
}
export { F as O };
