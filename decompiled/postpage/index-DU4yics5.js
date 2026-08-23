import {
  A,
  T,
  A as A_1,
  T as T_1,
  W_1 as Q_1,
  R,
  S,
  w,
  y,
  Q_1 as Q_1_1,
  r,
  T_1 as T_1_1,
  e,
  c,
  W,
  r as r_1,
} from "./index-DBLtLuBZ.js";

import { W as W_1 } from "./IconChevronLeft-0Of1x6nI.js";
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
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "b453f1fc-e390-4d05-959d-682d2cc08d9a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-b453f1fc-e390-4d05-959d-682d2cc08d9a";
    }
  } catch {}
})();
const Y = "uqHV";
const G = "Xpzj";
const Z = "eCcT";
const ee = "ukEk";
const te = "MxVK";
const ne = "idpe";
const oe = "IJqp";
const ae = "sIOS";
const se = "lK8i";

const o = {
  postPage: Y,
  pageHeader: G,
  pageTitle: Z,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

  const s = commentsSort(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = A_1(
    T_1((e) => ({
      currentPost: e.currentPost,
      currentPostError: e.currentPostError,
      fetchPost: e.fetchPost,
    }))
  );

  const {
    comments,
    commentsLoading,
    commentsLoadingMore,
    commentsHasMore,
    clearComments,
    fetchComments,
    loadMoreComments,
    toggleCommentLike,
    addComment,
    setHighlightedCommentId,
  } = Q_1(
    T_1((e) => ({
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

  const E = R((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = S(
    T_1((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const A = w((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === A;

  y(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [postId, s]);

  y(() => {
    if (!postId) {
      return;
    }
    let e = false;

    (async () => {
      await fetchPost(postId);
      return e || (await fetchComments(postId));
    })();

    return () => {
      e = true;
    };
  }, [postId, fetchPost, fetchComments]);

  const S = A(null);
  y(() => {
    if (!postId || !s) {
      return;
    }
    const e = `${postId}:${s}`;

    if (S.current !== e) {
      S.current = e;
      setHighlightedCommentId(s);
    }
  }, [postId, s, setHighlightedCommentId]);

  const _ = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e("/");
    }
  };

  const R = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const F = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const V = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = Q_1_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const W = await r.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: W.id }],
          });
        } catch (r) {
          console.error("Failed to send voice message:", r);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? T_1_1("div", {
        className: o.notFound,
        children: [
          T_1_1("h2", { children: "Пост не найден" }),
          T_1_1("button", {
            onClick: () => e("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? T_1_1("div", {
        className: o.postPage,
        children: [
          T_1_1("header", {
            className: o.pageHeader,
            children: [
              T_1_1("button", {
                className: o.backButton,
                onClick: _,
                children: T_1_1(W_1, { size: 24 }),
              }),
              T_1_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          T_1_1("div", {
            className: o.postSection,
            children: [
              T_1_1(currentPost, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: E,
                sourceContext: currentPost.id,
              }),
              T_1_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: T_1_1(W, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: R,
                  onLikeComment: V,
                  onAddComment: w,
                  onVoiceSend: y,
                  onLoadMore: F,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          T_1_1("div", {
            className: o.fixedInputWrapper,
            children: T_1_1(r_1, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
