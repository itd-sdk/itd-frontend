import {
  A,
  T,
  b,
  w as O_1,
  X_1 as Q_1,
  R,
  S,
  w,
  A as A_1,
  W as q_1,
  r,
  O_1 as O_1_1,
  e,
  c,
  W,
  I_1 as X_1,
} from "./index-B9FitUXy.js";

import { I as I_1 } from "./IconChevronLeft-DoFeid_h.js";
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
      t._sentryDebugIds[a] = "abaea1a4-db5c-421d-ba40-03bf42b83d64";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-abaea1a4-db5c-421d-ba40-03bf42b83d64";
    }
  } catch {}
})();
const G = "Kx3P";
const Z = "jFdV";
const I = "xYJ2";
const ee = "VLTk";
const te = "z8UJ";
const ne = "WvH8";
const oe = "EhpS";
const ae = "E6KM";
const se = "VJEE";

const o = {
  postPage: G,
  pageHeader: Z,
  pageTitle: I,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

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

  const A = w((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === A;

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

  const p = A(null);
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

  const V = (e) => {
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
          const W = await r.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: W.id }],
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
                  onSortChange: F,
                  onLikeComment: V,
                  onAddComment: b,
                  onVoiceSend: w,
                  onLoadMore: R,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          O_1_1("div", {
            className: o.fixedInputWrapper,
            children: O_1_1(X_1, {
              onSubmit: (e, r, l) => b({ text: e, spans: r, attachments: l }),
              onVoiceSend: w,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
