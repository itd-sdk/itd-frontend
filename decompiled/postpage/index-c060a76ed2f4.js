import {
  A,
  a6,
  a1,
  a7,
  a8,
  a9,
  aa,
  ab as K_1,
  h,
  q,
  ab,
  h as h_1,
  $,
  a5,
  ac,
  ad,
} from "./index-4a2211963806.js";
import { I as I_1 } from "./IconChevronLeft-1012aa4dcaa3.js";
const G = "qdYM";
const Q = "f9IO";
const I = "Y1qd";
const ee = "BRjX";
const te = "J93K";
const oe = "JM4y";
const ne = "mdRt";
const ae = "YrbV";
const re = "ZCTo";

const n = {
  postPage: G,
  pageHeader: Q,
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

  const a = a6(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = a1(
    a7((e) => ({
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
  } = a8(
    a7((e) => ({
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

  const x = a9((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && h.current !== postId) {
    h.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = aa(
    a7((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const F = K_1((e) => e.profile?.id);

  const R = currentPost?.wallOwnerId === F;

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

  const B = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const V = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const W = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const $ = (e) => {
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
          const q = await ab.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: q.id }],
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
            onClick: () => $("/"),
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
                onClick: B,
                children: h_1(I_1, { size: 24 }),
              }),
              h_1("h1", { className: n.pageTitle, children: "Пост" }),
            ],
          }),
          h_1("div", {
            className: n.postSection,
            children: [
              h_1(a5, {
                className: n.post,
                post: currentPost,
                variant: "modal",
                source: x,
                sourceContext: currentPost.id,
              }),
              h_1("div", {
                className: n.commentsSection,
                "data-comments-section": true,
                children: h_1(ac, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: V,
                  onLikeComment: $,
                  onAddComment: w,
                  onVoiceSend: L,
                  onLoadMore: W,
                  isWallOwner: R,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          h_1("div", {
            className: n.fixedInputWrapper,
            children: h_1(ad, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: L,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
