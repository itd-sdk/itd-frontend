import {
  A,
  T,
  c,
  N,
  T as T_1,
  R as Q_1,
  R,
  x,
  y,
  s as q_1,
  s,
  a,
  f,
  e,
  S,
  A as A_1,
} from "./index-DuQT229k.js";
import { Q_1 as Q_1_1 } from "./IconChevronLeft-CbQdWkHt.js";
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
      t._sentryDebugIds[a] = "39ff6770-4791-4de2-838f-d6e7b8033335";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-39ff6770-4791-4de2-838f-d6e7b8033335";
    }
  } catch {}
})();
const K = "QqYG";
const Z = "uIlT";
const J = "xjUg";
const X = "Rfx6";
const ee = "tPOc";
const te = "ejNK";
const oe = "kQCm";
const ne = "b4EG";
const ae = "ZP84";

const n = {
  postPage: K,
  pageHeader: Z,
  pageTitle: J,
  postSection: X,
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

  const H = commentsSort((e) => e.profile?.id);

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
      f("/");
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

  const R = (e) => {
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
          const f = new File([e], s, { type: e.type || "audio/webm" });
          const F = await s.uploadMedia(f);
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
            onClick: () => f("/"),
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
                children: comment(Q_1_1, { size: 24 }),
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
                  onLikeComment: R,
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
              onSubmit: (e, s, f) => b({ text: e, spans: s, attachments: f }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
