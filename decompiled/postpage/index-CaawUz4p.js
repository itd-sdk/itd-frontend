import {
  A,
  T,
  A as A_1,
  h as f_1,
  g,
  i,
  C as j_1,
  a,
  h,
  T as T_1,
  m,
  f_1 as f_1_1,
  $,
  e,
  C,
  k,
} from "./index-CR_1arh8.js";

import { I as I_1 } from "./IconChevronLeft-D9MJXHfq.js";
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
      t._sentryDebugIds[a] = "02fd961f-15af-4a71-9b1c-76805c880c45";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-02fd961f-15af-4a71-9b1c-76805c880c45";
    }
  } catch {}
})();
const Q = "yeyh";
const X = "AvEb";
const I = "Yeqb";
const ee = "GqyM";
const te = "GJwL";
const ne = "Jgd4";
const oe = "zPYe";
const ae = "JAyi";
const se = "nZul";

const o = {
  postPage: Q,
  pageHeader: X,
  pageTitle: I,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = toggleCommentLike(null);

  const s = setCommentsSort(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = A_1(
    f_1((e) => ({
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
    f_1((e) => ({
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

  const E = i((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = j_1(
    f_1((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = comment((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === x;

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

  const p = toggleCommentLike(null);
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

  const _ = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const F = (e) => {
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

  const W = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = T_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const $ = await fetchComments.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: $.id }],
          });
        } catch (r) {
          console.error("Failed to send voice message:", r);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? f_1_1("div", {
        className: o.notFound,
        children: [
          f_1_1("h2", { children: "Пост не найден" }),
          f_1_1("button", {
            onClick: () => $("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? f_1_1("div", {
        className: o.postPage,
        children: [
          f_1_1("header", {
            className: o.pageHeader,
            children: [
              f_1_1("button", {
                className: o.backButton,
                onClick: _,
                children: f_1_1(I_1, { size: 24 }),
              }),
              f_1_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          f_1_1("div", {
            className: o.postSection,
            children: [
              f_1_1(e, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: E,
                sourceContext: currentPost.id,
              }),
              f_1_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: f_1_1(commentsHasMore, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: F,
                  onLikeComment: W,
                  onAddComment: w,
                  onVoiceSend: y,
                  onLoadMore: R,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          f_1_1("div", {
            className: o.fixedInputWrapper,
            children: f_1_1(comments, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
