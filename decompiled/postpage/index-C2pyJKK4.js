import {
  A,
  T,
  c,
  L_1_1 as L_1,
  N,
  O,
  x_1 as Q_1,
  x,
  y,
  A_1 as q_1,
  s,
  a,
  L_1 as L_1_1,
  e,
  A as A_1,
  S,
} from "./index-BCnJB3wz.js";

import { x as x_1 } from "./IconChevronLeft-WQg0EXIc.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "afa6b0b2-bc53-4fc4-aebd-31b9d58e091d";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-afa6b0b2-bc53-4fc4-aebd-31b9d58e091d";
    }
  } catch {}
})();
const X = "OhLZ";
const Y = "ObWL";
const J = "Ht1u";
const K = "fCZb";
const ee = "zs5O";
const te = "vjB0";
const oe = "dAsy";
const ne = "GzT8";
const ae = "XSnE";

const n = {
  postPage: X,
  pageHeader: Y,
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
    L_1((e) => ({
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
  } = N(
    L_1((e) => ({
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

  const N = O((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = Q_1(
    L_1((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const T = x((e) => e.profile?.id);

  const x = currentPost?.wallOwnerId === T;

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
      L_1_1("/");
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

  const O = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
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
          const F = await s.uploadMedia(h);
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
        className: n.notFound,
        children: [
          comment("h2", { children: "Пост не найден" }),
          comment("button", {
            onClick: () => L_1_1("/"),
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
                children: comment(x_1, { size: 24 }),
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
                children: comment(A_1, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: D,
                  onLikeComment: O,
                  onAddComment: w,
                  onVoiceSend: y,
                  onLoadMore: _,
                  isWallOwner: x,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          comment("div", {
            className: n.fixedInputWrapper,
            children: comment(commentsLoadingMore, {
              onSubmit: (e, s, h) => w({ text: e, spans: s, attachments: h }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
