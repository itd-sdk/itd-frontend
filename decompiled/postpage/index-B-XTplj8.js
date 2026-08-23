import {
  A,
  T,
  b,
  Q_1 as O_1,
  c as Q_1,
  R,
  S,
  w,
  A as A_1,
  w as w_1,
  r,
  O_1 as O_1_1,
  e,
  c,
  W,
  w_1 as w_1_1,
} from "./index-pEgBAsWz.js";

import { I as I_1 } from "./IconChevronLeft-4Cj0xkqD.js";
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
      t._sentryDebugIds[a] = "7c6eefc9-b130-46e3-87af-044076078b00";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-7c6eefc9-b130-46e3-87af-044076078b00";
    }
  } catch {}
})();
const I = "dMzd";
const J = "Zcii";
const K = "Xi49";
const ee = "lCq2";
const te = "t4t9";
const ne = "Zdf3";
const oe = "g5aA";
const ae = "I9mW";
const se = "wpA4";

const o = {
  postPage: I,
  pageHeader: J,
  pageTitle: K,
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

  const { currentPost, currentPostError, fetchPost } = b(
    O_1((e) => ({
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
  } = Q_1(
    O_1((e) => ({
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

  const H = R((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = setHighlightedCommentId(
    O_1((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = w((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === x;

  A_1(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [postId, s]);

  A_1(() => {
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
  A_1(() => {
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
      e("/");
    }
  };

  const R = (e) => {
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

  const F = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const b = w_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const $ = await r.uploadMedia(l);
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
    ? O_1_1("div", {
        className: o.notFound,
        children: [
          O_1_1("h2", { children: "Пост не найден" }),
          O_1_1("button", {
            onClick: () => e("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? O_1_1("div", {
        className: o.postPage,
        children: [
          O_1_1("header", {
            className: o.pageHeader,
            children: [
              O_1_1("button", {
                className: o.backButton,
                onClick: _,
                children: O_1_1(I_1, { size: 24 }),
              }),
              O_1_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          O_1_1("div", {
            className: o.postSection,
            children: [
              O_1_1(currentPost, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: H,
                sourceContext: currentPost.id,
              }),
              O_1_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: O_1_1(W, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: R,
                  onLikeComment: F,
                  onAddComment: w,
                  onVoiceSend: b,
                  onLoadMore: W,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          O_1_1("div", {
            className: o.fixedInputWrapper,
            children: O_1_1(w_1_1, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
