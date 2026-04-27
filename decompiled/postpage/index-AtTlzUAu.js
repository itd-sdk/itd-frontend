import {
  A,
  T,
  a3 as K_1,
  a2,
  a3,
  a4,
  c,
  y,
  a5 as q_1,
  m,
  a,
  m as m_1,
  a5,
  W,
  a6,
  a7,
} from "./index-BNG2MjJY.js";

const j = "o62U";
const J = "wa1G";
const X = "IVKQ";
const Y = "goKu";
const Z = "HxL9";
const I = "M5lP";
const ee = "L9rs";
const te = "LFVo";
const oe = "PgmD";

const n = {
  postPage: j,
  pageHeader: J,
  pageTitle: X,
  postSection: Y,
  backButton: Z,
  post: I,
  commentsSection: ee,
  fixedInputWrapper: te,
  notFound: oe,
};

export function PostPage({ postId, comment }) {
  const C = A(null);

  const s = T(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = K_1(
    a2((e) => ({
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

  if (postId && C.current !== postId) {
    C.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = a4(
    a2((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = comments((e) => e.profile?.id);

  const F = currentPost?.wallOwnerId === x;

  loadMoreComments(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [postId, s]);

  loadMoreComments(() => {
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

  loadMoreComments(() => {
    if (s && !commentsLoading && comments.length > 0) {
      setHighlightedCommentId(s);
    }
  }, [s, commentsLoading, comments.length, setHighlightedCommentId]);

  const A = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      m_1("/");
    }
  };

  const T = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const V = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const W = (e) => {
    toggleCommentLike(e);
  };

  const L = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const P = q_1(
    async (e) => {
      if (postId) {
        try {
          const a = `voice_${Date.now()}.webm`;
          const u = new File([e], a, { type: e.type || "audio/webm" });
          const D = await comment.uploadMedia(u);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: D.id }],
          });
        } catch (a) {
          console.error("Failed to send voice message:", a);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? a("div", {
        className: n.notFound,
        children: [
          a("h2", { children: "Пост не найден" }),
          a("button", {
            onClick: () => m_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? a("div", {
        className: n.postPage,
        children: [
          a("header", {
            className: n.pageHeader,
            children: [
              a("button", {
                className: n.backButton,
                onClick: A,
                children: a(a5, { size: 24 }),
              }),
              a("h1", { className: n.pageTitle, children: "Пост" }),
            ],
          }),
          a("div", {
            className: n.postSection,
            children: [
              a(W, { className: n.post, post: currentPost, variant: "modal" }),
              a("div", {
                className: n.commentsSection,
                "data-comments-section": true,
                children: a(a6, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: T,
                  onLikeComment: W,
                  onAddComment: L,
                  onVoiceSend: P,
                  onLoadMore: V,
                  isWallOwner: F,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          a("div", {
            className: n.fixedInputWrapper,
            children: a(a7, {
              onSubmit: (e, a, u) => L({ text: e, spans: a, attachments: u }),
              onVoiceSend: P,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
