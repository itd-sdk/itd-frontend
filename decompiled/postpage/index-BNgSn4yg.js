import {
  A,
  a5,
  b,
  a9,
  aa,
  ab,
  ac,
  q_1 as Y_1,
  h,
  Y_1_1 as q_1,
  Y_1 as Y_1_1,
  a9 as a9_1,
  e,
  c,
  ad,
  ae as ae_1,
} from "./index-BuVp7kGl.js";

import { I } from "./IconChevronLeft-7q6BtY14.js";
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
      t._sentryDebugIds[a] = "5baabf43-2455-40f6-87c8-05ea0c406478";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-5baabf43-2455-40f6-87c8-05ea0c406478";
    }
  } catch {}
})();
const J = "x5fW";
const K = "se0k";
const X = "CdmN";
const ee = "DFBb";
const te = "EZSI";
const ne = "Um3E";
const oe = "WPd0";
const ae = "GFQ9";
const se = "ypd0";

const o = {
  postPage: J,
  pageHeader: K,
  pageTitle: X,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

  const s = a5(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = b(
    a9((e) => ({
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
  } = aa(
    a9((e) => ({
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

  const H = ab((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = ac(
    a9((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const T = Y_1((e) => e.profile?.id);

  const A = currentPost?.wallOwnerId === T;

  fetchPost(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [postId, s]);

  fetchPost(() => {
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

  const p = A(null);
  fetchPost(() => {
    if (!postId || !s) {
      return;
    }
    const e = `${postId}:${s}`;

    if (p.current !== e) {
      p.current = e;
      setHighlightedCommentId(s);
    }
  }, [postId, s, setHighlightedCommentId]);

  const F = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e("/");
    }
  };

  const _ = (e) => {
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

  const R = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const b = q_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const B = await Y_1_1.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: B.id }],
          });
        } catch (r) {
          console.error("Failed to send voice message:", r);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? a9_1("div", {
        className: o.notFound,
        children: [
          a9_1("h2", { children: "Пост не найден" }),
          a9_1("button", {
            onClick: () => e("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? a9_1("div", {
        className: o.postPage,
        children: [
          a9_1("header", {
            className: o.pageHeader,
            children: [
              a9_1("button", {
                className: o.backButton,
                onClick: F,
                children: a9_1(I, { size: 24 }),
              }),
              a9_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          a9_1("div", {
            className: o.postSection,
            children: [
              a9_1(currentPost, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: H,
                sourceContext: currentPost.id,
              }),
              a9_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: a9_1(ad, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: _,
                  onLikeComment: R,
                  onAddComment: w,
                  onVoiceSend: b,
                  onLoadMore: W,
                  isWallOwner: A,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          a9_1("div", {
            className: o.fixedInputWrapper,
            children: a9_1(ae_1, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
