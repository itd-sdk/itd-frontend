import {
  A,
  T,
  c,
  y_1 as L_1,
  N,
  Q_1 as O_1,
  s_1 as Q_1,
  x,
  y,
  q,
  s,
  a,
  y as y_1,
  e,
  R,
  S,
} from "./index-7xRaK15k.js";

import { s as s_1 } from "./IconChevronLeft-CN0ttJhV.js";
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
      t._sentryDebugIds[a] = "a26963c0-9a40-4e3c-82dd-fb8cb66cae18";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a26963c0-9a40-4e3c-82dd-fb8cb66cae18";
    }
  } catch {}
})();
const X = "iwz3";
const G = "ePNL";
const J = "TqvP";
const Z = "fUY9";
const ee = "kxKF";
const te = "wY82";
const oe = "jVax";
const ne = "vSUX";
const ae = "elxA";

const n = {
  postPage: X,
  pageHeader: G,
  pageTitle: J,
  postSection: Z,
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

  const N = O_1((e) => e.navigatedInApp) ? "post_page" : "link";

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

  const T = commentsSort((e) => e.profile?.id);

  const A = currentPost?.wallOwnerId === T;

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

  const y = q(
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
                onClick: E,
                children: comment(s_1, { size: 24 }),
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
                children: comment(R, {
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
                  isWallOwner: A,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          comment("div", {
            className: n.fixedInputWrapper,
            children: comment(commentsLoadingMore, {
              onSubmit: (e, s, g) => b({ text: e, spans: s, attachments: g }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
