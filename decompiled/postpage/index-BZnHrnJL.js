import {
  A,
  T,
  b,
  N,
  O,
  q_1 as Q_1,
  R,
  w,
  h,
  r as q_1,
  r,
  N as N_1,
  e,
  c,
  W,
  b as b_1,
} from "./index-dnACTU3c.js";

import { c as c_1 } from "./IconChevronLeft-Bhjo82wQ.js";
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
      t._sentryDebugIds[a] = "24c7ab12-7e5b-4a53-bc44-b145dd82ddf0";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-24c7ab12-7e5b-4a53-bc44-b145dd82ddf0";
    }
  } catch {}
})();
const j = "mAcu";
const G = "IcoV";
const Z = "IpQO";
const ee = "gKJ3";
const te = "bXfx";
const ne = "brpX";
const oe = "Psw6";
const ae = "vAFm";
const se = "X2Rb";

const o = {
  postPage: j,
  pageHeader: G,
  pageTitle: Z,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = toggleCommentLike(null);

  const s = T(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = b(
    loadMoreComments((e) => ({
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
  } = O(
    loadMoreComments((e) => ({
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

  const H = Q_1((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = R(
    loadMoreComments((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const T = w((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === T;

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

  const S = toggleCommentLike(null);
  commentsLoadingMore(() => {
    if (!postId || !s) {
      return;
    }
    const e = `${postId}:${s}`;

    if (S.current !== e) {
      S.current = e;
      setHighlightedCommentId(s);
    }
  }, [postId, s, setHighlightedCommentId]);

  const R = () => {
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

  const F = () => {
    if (postId && commentsHasMore && !commentsLoadingMore) {
      loadMoreComments(postId);
    }
  };

  const W = (e) => {
    toggleCommentLike(e);
  };

  const b = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const w = q_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const O = await r.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: O.id }],
          });
        } catch (r) {
          console.error("Failed to send voice message:", r);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? N_1("div", {
        className: o.notFound,
        children: [
          N_1("h2", { children: "Пост не найден" }),
          N_1("button", {
            onClick: () => e("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? N_1("div", {
        className: o.postPage,
        children: [
          N_1("header", {
            className: o.pageHeader,
            children: [
              N_1("button", {
                className: o.backButton,
                onClick: R,
                children: N_1(c_1, { size: 24 }),
              }),
              N_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          N_1("div", {
            className: o.postSection,
            children: [
              N_1(currentPost, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: H,
                sourceContext: currentPost.id,
              }),
              N_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: N_1(W, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: _,
                  onLikeComment: W,
                  onAddComment: b,
                  onVoiceSend: w,
                  onLoadMore: F,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          N_1("div", {
            className: o.fixedInputWrapper,
            children: N_1(b_1, {
              onSubmit: (e, r, l) => b({ text: e, spans: r, attachments: l }),
              onVoiceSend: w,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
