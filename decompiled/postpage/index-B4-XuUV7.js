import {
  A,
  T,
  b,
  T as T_1,
  W as Q_1,
  R,
  S,
  w,
  A as A_1,
  Q_1 as Q_1_1,
  r,
  T_1 as T_1_1,
  e,
  c,
  W,
  X,
} from "./index-DDTOXJaD.js";

import { I as I_1 } from "./IconChevronLeft-6Kf2Hf_x.js";
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
      t._sentryDebugIds[a] = "9e472032-0cbb-4a7f-8b22-c403cf547e4a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-9e472032-0cbb-4a7f-8b22-c403cf547e4a";
    }
  } catch {}
})();
const G = "CYTq";
const Z = "c21v";
const I = "id5l";
const ee = "FrKM";
const te = "Oq4E";
const ne = "kTwv";
const oe = "aeNB";
const ae = "WiJT";
const re = "ewY3";

const o = {
  postPage: G,
  pageHeader: Z,
  pageTitle: I,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: re,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

  const r = toggleCommentLike(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = b(
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

  const { commentsSort, setCommentsSort } = setHighlightedCommentId(
    T_1((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const A = w((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === A;

  A_1(() => {
    if (!r) {
      window.scrollTo(0, 0);
    }
  }, [postId, r]);

  A_1(() => {
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

  const w = A(null);
  A_1(() => {
    if (!postId || !r) {
      return;
    }
    const e = `${postId}:${r}`;

    if (w.current !== e) {
      w.current = e;
      setHighlightedCommentId(r);
    }
  }, [postId, r, setHighlightedCommentId]);

  const _ = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e("/");
    }
  };

  const F = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const R = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const W = (e) => {
    toggleCommentLike(e);
  };

  const p = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const b = Q_1_1(
    async (e) => {
      if (postId) {
        try {
          const s = `voice_${Date.now()}.webm`;
          const l = new File([e], s, { type: e.type || "audio/webm" });
          const B = await r.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: B.id }],
          });
        } catch (s) {
          console.error("Failed to send voice message:", s);
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
                children: T_1_1(I_1, { size: 24 }),
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
                  onSortChange: F,
                  onLikeComment: W,
                  onAddComment: p,
                  onVoiceSend: b,
                  onLoadMore: R,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          T_1_1("div", {
            className: o.fixedInputWrapper,
            children: T_1_1(X, {
              onSubmit: (e, s, l) => p({ text: e, spans: s, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
