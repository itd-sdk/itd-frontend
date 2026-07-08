import {
  A,
  T,
  c,
  N,
  c as c_1,
  A_1 as Q_1,
  R,
  x,
  y_1_1 as y_1,
  x as x_1,
  s,
  a,
  y_1 as y_1_1,
  e,
  S,
  A as A_1,
} from "./index-BewGW5_v.js";

import { s as s_1 } from "./IconChevronLeft-Cn8Oe6J-.js";
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
      t._sentryDebugIds[a] = "5ee255b7-01b5-4c1a-8a0a-cc6dac52d1ff";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-5ee255b7-01b5-4c1a-8a0a-cc6dac52d1ff";
    }
  } catch {}
})();
const G = "LF4R";
const J = "Ys1c";
const X = "WKru";
const Z = "LKNs";
const ee = "uwvT";
const te = "K27h";
const oe = "tOxS";
const ne = "e8qL";
const ae = "RUBl";

const n = {
  postPage: G,
  pageHeader: J,
  pageTitle: X,
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
  } = c_1(
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

  const T = commentsSort((e) => e.profile?.id);

  const E = currentPost?.wallOwnerId === T;

  y_1(() => {
    if (!r) {
      window.scrollTo(0, 0);
    }
  }, [postId, r]);

  y_1(() => {
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

  y_1(() => {
    if (r && !commentsLoading && comments.length > 0) {
      setHighlightedCommentId(r);
    }
  }, [r, commentsLoading, comments.length, setHighlightedCommentId]);

  const A = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      y_1_1("/");
    }
  };

  const D = (e) => {
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

  const _ = (e) => {
    toggleCommentLike(e);
  };

  const b = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const L = x_1(
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
            onClick: () => y_1_1("/"),
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
                children: comment(commentsLoadingMore, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: D,
                  onLikeComment: _,
                  onAddComment: b,
                  onVoiceSend: L,
                  onLoadMore: R,
                  isWallOwner: E,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          comment("div", {
            className: n.fixedInputWrapper,
            children: comment(A_1, {
              onSubmit: (e, s, h) => b({ text: e, spans: s, attachments: h }),
              onVoiceSend: L,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
