import {
  aM,
  aN,
  aO,
  a6,
  aP,
  q,
  $ as $_1,
  q as q_1,
  af,
  ag,
  aQ,
  aR,
} from "./index-4a2211963806.js";

const T = "iorw";
const $ = "kcNH";
const A = "Vx7o";
const D = "oIub";
const j = "bntM";
const p = "HAXN";
const R = "I8Xx";
const S = "MZTw";
const V = "CMZt";

const t = {
  post: T,
  header: $,
  avatarLink: A,
  headText: D,
  nameLink: j,
  time: p,
  body: R,
  text: S,
  media: V,
};

export function MessengerPost({ post }) {
  const { openModal, closeModal } = aM();

  const { liked, totalLikes, handleLike, handleComment, handleShare } = aN(
    post,
    { openModal: openModal, closeModal: closeModal }
  );

  const s = aO(post);

  const d = a6(() => aP(post.attachments), [post.attachments]);

  const h = q(
    (m) => {
      m.stopPropagation();
      const M = post.author.username ?? post.author.id;
      $_1(`/@${M}/post/${post.id}`);
    },
    [post.author.username, post.author.id, post.id]
  );

  const l = q(
    (m) => {
      m.stopPropagation();
      $_1(`/@${post.author.username ?? post.author.id}`);
    },
    [post.author.username, post.author.id]
  );

  return q_1("div", {
    className: t.post,
    children: [
      q_1("div", {
        className: t.header,
        onClick: h,
        children: [
          q_1("span", {
            className: t.avatarLink,
            onClick: l,
            children: q_1(af, {
              src: post.author.avatar ?? "",
              alt: post.author.displayName,
              size: "sm",
            }),
          }),
          q_1("div", {
            className: t.headText,
            children: [
              q_1("span", {
                className: t.nameLink,
                onClick: l,
                children: q_1(ag, {
                  name: post.author.displayName,
                  verified: post.author.isVerified,
                  hasNuksta: post.author.hasNuksta,
                  pin: post.author.pin,
                  badgesMatchName: true,
                  halloween: post.author.halloween,
                  size: "xs",
                }),
              }),
              q_1("span", { className: t.time, children: z(post.createdAt) }),
            ],
          }),
        ],
      }),
      q_1("div", {
        className: t.body,
        children: [
          post.text &&
            q_1("div", { className: t.text, onClick: h, children: post.text }),
          d.length > 0 &&
            q_1("div", {
              className: t.media,
              children: q_1(aQ, { media: d, postVs: post.vs, source: "link" }),
            }),
          q_1(aR, {
            liked: liked,
            reposted: s.reposted,
            likesCount: totalLikes,
            repostsCount: s.repostsCount,
            commentsCount: s.commentsCount,
            viewsCount: s.viewsCount,
            dominantEmoji: s.dominantEmoji,
            onLike: handleLike,
            onRepost: handleShare,
            onComment: handleComment,
            compact: true,
            emojiOnly: true,
          }),
        ],
      }),
    ],
  });
}

function z(e) {
  const r = new Date(e).getTime();
  if (Number.isNaN(r)) {
    return "";
  }
  const i = Math.max(0, Math.floor((Date.now() - r) / 1000 /* 1e3 */));
  if (i < 60) {
    return "только что";
  }
  const n = Math.floor(i / 60);
  if (n < 60) {
    return `${n} мин`;
  }
  const o = Math.floor(n / 60);
  if (o < 24) {
    return `${o} ч`;
  }
  const c = Math.floor(o / 24);
  return c < 7
    ? `${c} д`
    : new Date(e).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
      });
}
export { MessengerPost as MessengerPost };
