import {
  A,
  T,
  b,
  f,
  g,
  i,
  a as j_1,
  a,
  h,
  q,
  m,
  h as h_1,
  b as b_1,
  e,
  C,
  b_1 as b_1_1,
} from "./index-AoERIL5v.js";

import { I as I_1 } from "./IconChevronLeft-esjxi0mx.js";
const J = "m2Tv";
const Z = "Qz4G";
const I = "RV8E";
const ee = "xUxu";
const te = "hpVA";
const oe = "TYv6";
const ne = "FnA9";
const ae = "kKzc";
const re = "wXBb";

const n = {
  postPage: J,
  pageHeader: Z,
  pageTitle: I,
  postSection: ee,
  backButton: te,
  post: oe,
  commentsSection: ne,
  fixedInputWrapper: ae,
  notFound: re,
};

export function PostPage({ postId, comment }) {
  const h = commentsSort(null);

  const a = setCommentsSort(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = commentsLoading(
    commentsHasMore((e) => ({
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
  } = fetchPost(
    commentsHasMore((e) => ({
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

  const H = addComment((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && h.current !== postId) {
    h.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = j_1(
    commentsHasMore((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const F = a((e) => e.profile?.id);

  const V = currentPost?.wallOwnerId === F;

  h(() => {
    if (!a) {
      window.scrollTo(0, 0);
    }
  }, [postId, a]);

  h(() => {
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

  const p = commentsSort(null);
  h(() => {
    if (!postId || !a) {
      return;
    }
    const e = `${postId}:${a}`;

    if (p.current !== e) {
      p.current = e;
      setHighlightedCommentId(a);
    }
  }, [postId, a, setHighlightedCommentId]);

  const z = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      b_1("/");
    }
  };

  const B = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const E = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const R = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const L = q(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const U = await fetchComments.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: U.id }],
          });
        } catch (r) {
          console.error("Failed to send voice message:", r);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? h_1("div", {
        className: n.notFound,
        children: [
          h_1("h2", { children: "Пост не найден" }),
          h_1("button", {
            onClick: () => b_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? h_1("div", {
        className: n.postPage,
        children: [
          h_1("header", {
            className: n.pageHeader,
            children: [
              h_1("button", {
                className: n.backButton,
                onClick: z,
                children: h_1(I_1, { size: 24 }),
              }),
              h_1("h1", { className: n.pageTitle, children: "Пост" }),
            ],
          }),
          h_1("div", {
            className: n.postSection,
            children: [
              h_1(e, {
                className: n.post,
                post: currentPost,
                variant: "modal",
                source: H,
                sourceContext: currentPost.id,
              }),
              h_1("div", {
                className: n.commentsSection,
                "data-comments-section": true,
                children: h_1(commentsLoadingMore, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: B,
                  onLikeComment: R,
                  onAddComment: w,
                  onVoiceSend: L,
                  onLoadMore: E,
                  isWallOwner: V,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          h_1("div", {
            className: n.fixedInputWrapper,
            children: h_1(b_1_1, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: L,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
