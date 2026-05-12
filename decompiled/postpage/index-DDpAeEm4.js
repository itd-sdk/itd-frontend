import {
  A,
  T,
  c,
  K as K_1,
  e as L_1,
  N,
  w,
  y,
  r as q_1,
  r,
  a,
  e,
  P,
  w as w_1,
  P as P_1,
} from "./index-DDCL-vHK.js";

import { I as I_1 } from "./IconChevronLeft-Dk6onnGB.js";
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
    t.SENTRY_RELEASE = { id: "1.1.0" };
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "cb9cb0ec-0b66-4794-b4fc-f9b4513e7de3";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-cb9cb0ec-0b66-4794-b4fc-f9b4513e7de3";
    }
  } catch {}
})();
const I = "DA7R";
const K = "NzNe";
const j = "mCQL";
const G = "CepT";
const J = "ZiZl";
const X = "SptC";
const ee = "SDC3";
const te = "Yzxh";
const ne = "qkUe";

const o = {
  postPage: I,
  pageHeader: K,
  pageTitle: j,
  postSection: G,
  backButton: J,
  post: X,
  commentsSection: ee,
  fixedInputWrapper: te,
  notFound: ne,
};

export function PostPage({ postId, comment }) {
  const c = A(null);

  const r = T(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = c(
    K_1((e) => ({
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
  } = L_1(
    K_1((e) => ({
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

  if (postId && c.current !== postId) {
    c.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = commentsSort(
    K_1((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const H = commentsHasMore((e) => e.profile?.id);

  const T = currentPost?.wallOwnerId === H;

  y(() => {
    if (!r) {
      window.scrollTo(0, 0);
    }
  }, [postId, r]);

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

  y(() => {
    if (r && !commentsLoading && comments.length > 0) {
      setHighlightedCommentId(r);
    }
  }, [r, commentsLoading, comments.length, setHighlightedCommentId]);

  const E = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e("/");
    }
  };

  const x = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const A = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const _ = (e) => {
    toggleCommentLike(e);
  };

  const p = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = q_1(
    async (e) => {
      if (postId) {
        try {
          const s = `voice_${Date.now()}.webm`;
          const h = new File([e], s, { type: e.type || "audio/webm" });
          const F = await r.uploadMedia(h);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: F.id }],
          });
        } catch (s) {
          console.error("Failed to send voice message:", s);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? comment("div", {
        className: o.notFound,
        children: [
          comment("h2", { children: "Пост не найден" }),
          comment("button", {
            onClick: () => e("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? comment("div", {
        className: o.postPage,
        children: [
          comment("header", {
            className: o.pageHeader,
            children: [
              comment("button", {
                className: o.backButton,
                onClick: E,
                children: comment(I_1, { size: 24 }),
              }),
              comment("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          comment("div", {
            className: o.postSection,
            children: [
              comment(currentPostError, {
                className: o.post,
                post: currentPost,
                variant: "modal",
              }),
              comment("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: comment(w_1, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: x,
                  onLikeComment: _,
                  onAddComment: p,
                  onVoiceSend: y,
                  onLoadMore: A,
                  isWallOwner: T,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          comment("div", {
            className: o.fixedInputWrapper,
            children: comment(P_1, {
              onSubmit: (e, s, h) => p({ text: e, spans: s, attachments: h }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
