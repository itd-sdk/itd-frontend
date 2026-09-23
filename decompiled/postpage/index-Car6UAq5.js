import {
  A,
  T,
  e as b_1,
  R,
  W,
  q_1 as X_1,
  w as Y_1,
  E,
  h,
  c as q_1,
  w,
  R as R_1,
  e,
  c,
  Z as Z_1,
  a0,
} from "./index-B74jCtUp.js";

import { a0 as a0_1 } from "./IconChevronLeft-DjelCr6A.js";
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
      t._sentryDebugIds[a] = "ac7f7eff-f51f-472f-a017-c39e41ce6216";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-ac7f7eff-f51f-472f-a017-c39e41ce6216";
    }
  } catch {}
})();
const Z = "slXn";
const j = "GiFI";
const Q = "PWIc";
const ee = "dSAV";
const te = "OJRE";
const ne = "KPul";
const oe = "W9J0";
const ae = "C9UW";
const se = "nzdg";

const o = {
  postPage: Z,
  pageHeader: j,
  pageTitle: Q,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = commentsSort(null);

  const s = setCommentsSort(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = b_1(
    R((e) => ({
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
  } = W(
    R((e) => ({
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

  const H = X_1((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = Y_1(
    R((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const W = toggleCommentLike((e) => e.profile?.id);

  const x = currentPost?.wallOwnerId === W;

  commentsLoadingMore(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [postId, s]);

  commentsLoadingMore(() => {
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
  commentsLoadingMore(() => {
    if (!postId || !s) {
      return;
    }
    const e = `${postId}:${s}`;

    if (p.current !== e) {
      p.current = e;
      setHighlightedCommentId(s);
    }
  }, [postId, s, setHighlightedCommentId]);

  const D = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e("/");
    }
  };

  const R = (e) => {
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

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = q_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const U = await w.uploadMedia(l);
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
    ? R_1("div", {
        className: o.notFound,
        children: [
          R_1("h2", { children: "Пост не найден" }),
          R_1("button", {
            onClick: () => e("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? R_1("div", {
        className: o.postPage,
        children: [
          R_1("header", {
            className: o.pageHeader,
            children: [
              R_1("button", {
                className: o.backButton,
                onClick: D,
                children: R_1(a0_1, { size: 24 }),
              }),
              R_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          R_1("div", {
            className: o.postSection,
            children: [
              R_1(currentPost, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: H,
                sourceContext: currentPost.id,
              }),
              R_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: R_1(Z_1, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: R,
                  onLikeComment: F,
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
          R_1("div", {
            className: o.fixedInputWrapper,
            children: R_1(a0, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
