import {
  A,
  T,
  c,
  N,
  T as T_1,
  s as Q_1,
  R,
  x,
  y,
  q_1_1 as q_1,
  s,
  a,
  y as y_1,
  e,
  S,
  A as A_1,
} from "./index-CFv_0Hh6.js";

import { q_1 as q_1_1 } from "./IconChevronLeft-DRcQfgI5.js";
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
      t._sentryDebugIds[a] = "cf181fc6-adc2-4baa-a59b-228c942e2b2d";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-cf181fc6-adc2-4baa-a59b-228c942e2b2d";
    }
  } catch {}
})();
const Z = "kvNE";
const j = "b0ls";
const J = "lGXO";
const K = "NXYt";
const ee = "rGEz";
const te = "i0Ux";
const oe = "ZiE4";
const ne = "Qwd1";
const ae = "SkvF";

const n = {
  postPage: Z,
  pageHeader: j,
  pageTitle: J,
  postSection: K,
  backButton: ee,
  post: te,
  commentsSection: oe,
  fixedInputWrapper: ne,
  notFound: ae,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

  const r = T(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = currentPost(
    N((e) => ({
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
  } = T_1(
    N((e) => ({
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

  const N = Q_1((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = R(
    N((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const H = setCommentsSort((e) => e.profile?.id);

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

  const A = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      y_1("/");
    }
  };

  const D = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const _ = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const F = (e) => {
    toggleCommentLike(e);
  };

  const b = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = q_1(
    async (e) => {
      if (postId) {
        try {
          const s = `voice_${Date.now()}.webm`;
          const g = new File([e], s, { type: e.type || "audio/webm" });
          const R = await s.uploadMedia(g);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: R.id }],
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
        className: n.notFound,
        children: [
          comment("h2", { children: "Пост не найден" }),
          comment("button", {
            onClick: () => y_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? comment("div", {
        className: n.postPage,
        children: [
          comment("header", {
            className: n.pageHeader,
            children: [
              comment("button", {
                className: n.backButton,
                onClick: A,
                children: comment(q_1_1, { size: 24 }),
              }),
              comment("h1", { className: n.pageTitle, children: "Пост" }),
            ],
          }),
          comment("div", {
            className: n.postSection,
            children: [
              comment(e, {
                className: n.post,
                post: currentPost,
                variant: "modal",
                source: N,
                sourceContext: currentPost.id,
              }),
              comment("div", {
                className: n.commentsSection,
                "data-comments-section": true,
                children: comment(commentsLoadingMore, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: D,
                  onLikeComment: F,
                  onAddComment: b,
                  onVoiceSend: y,
                  onLoadMore: _,
                  isWallOwner: T,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          comment("div", {
            className: n.fixedInputWrapper,
            children: comment(A_1, {
              onSubmit: (e, s, g) => b({ text: e, spans: s, attachments: g }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
