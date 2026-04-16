import {
  A,
  T,
  K as K_1,
  a2,
  a3,
  a4,
  c,
  y,
  q as q_1,
  m,
  a,
  a7 as $_1,
  a5,
  W,
  a6,
  a7,
} from "./index-B0np_7Xy.js";

const j = "NCJMh6VC";
const q = "Q1CXQizH";
const J = "lp5GRZTP";
const K = "jnSbHonP";
const Z = "nDnu9hhf";
const I = "s32UFpYS";
const ee = "_1w3Yc5mB";
const te = "aX-yM5Hy";
const ne = "lGzPgBLd";

const o = {
  postPage: j,
  pageHeader: q,
  pageTitle: J,
  postSection: K,
  backButton: Z,
  post: I,
  commentsSection: ee,
  fixedInputWrapper: te,
  notFound: ne,
};

export function PostPage({ postId: t, comment: m }) {
  const C = A(null);

  const s = T(
    () =>
      m ||
      new URLSearchParams(window.location.search).get("comment") ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [m]
  );

  const {
    currentPost: c,
    currentPostError: k,
    fetchPost: f,
  } = K_1(
    a2((e) => ({
      currentPost: e.currentPost,
      currentPostError: e.currentPostError,
      fetchPost: e.fetchPost,
    }))
  );

  const {
    comments: r,
    commentsLoading: i,
    commentsLoadingMore: S,
    commentsHasMore: w,
    clearComments: y,
    fetchComments: l,
    loadMoreComments: H,
    toggleCommentLike: v,
    addComment: d,
    setHighlightedCommentId: p,
  } = a3(
    a2((e) => ({
      comments: e.comments,
      commentsLoading: e.commentsLoading,
      commentsLoadingMore: e.commentsLoadingMore,
      commentsHasMore: e.commentsHasMore,
      clearComments: e.clearComments,
      fetchComments: e.fetchComments,
      loadMoreComments: e.loadMoreComments,
      toggleCommentLike: e.toggleCommentLike,
      addComment: e.addComment,
      setHighlightedCommentId: e.setHighlightedCommentId,
    }))
  );

  if (t && C.current !== t) {
    C.current = t;
    y();
  }

  const { commentsSort: N, setCommentsSort: b } = a4(
    a2((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = c((e) => e.profile?.id);

  const F = c?.wallOwnerId === x;

  y(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [t, s]);

  y(() => {
    if (!t) {
      return;
    }
    let e = false;

    (async () => {
      await f(t);
      return e || (await l(t));
    })();

    return () => {
      e = true;
    };
  }, [t, f, l]);

  y(() => {
    if (s && !i && r.length > 0) {
      p(s);
    }
  }, [s, i, r.length, p]);

  const T = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $_1("/");
    }
  };

  const A = (e) => {
    b(e);

    if (t) {
      l(t);
    }
  };

  const B = () => {
    if (t && w && !S) {
      H(t);
    }
  };

  const W = (e) => {
    v(e);
  };

  const P = async (e) => {
    if (t) {
      await d(t, e);
    }
  };

  const L = q_1(
    async (e) => {
      if (t) {
        try {
          const a = `voice_${Date.now()}.webm`;
          const h = new File([e], a, { type: e.type || "audio/webm" });
          const z = await m.uploadMedia(h);
          await d(t, { text: "", attachments: [{ mediaId: z.id }] });
        } catch (a) {
          console.error("Failed to send voice message:", a);
        }
      }
    },
    [d, t]
  );

  return k
    ? a("div", {
        className: o.notFound,
        children: [
          a("h2", { children: "Пост не найден" }),
          a("button", {
            onClick: () => $_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : c
    ? a("div", {
        className: o.postPage,
        children: [
          a("header", {
            className: o.pageHeader,
            children: [
              a("button", {
                className: o.backButton,
                onClick: T,
                children: a(a5, { size: 24 }),
              }),
              a("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          a("div", {
            className: o.postSection,
            children: [
              a(W, { className: o.post, post: c, variant: "modal" }),
              a("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: a(a6, {
                  comments: r,
                  isLoading: i,
                  isLoadingMore: S,
                  hasMore: w,
                  sort: N,
                  onSortChange: A,
                  onLikeComment: W,
                  onAddComment: P,
                  onVoiceSend: L,
                  onLoadMore: B,
                  isWallOwner: F,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          a("div", {
            className: o.fixedInputWrapper,
            children: a(a7, {
              onSubmit: (e, a, h) => P({ text: e, spans: a, attachments: h }),
              onVoiceSend: L,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
