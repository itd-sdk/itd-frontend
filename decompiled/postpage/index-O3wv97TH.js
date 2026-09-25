import {
  A,
  T,
  b,
  N,
  b as b_1,
  R_1 as Q_1,
  R,
  w,
  h,
  q,
  r,
  N as N_1,
  e,
  c,
  W,
  R as R_1,
} from "./index-gHxZkwFX.js";

import { W as W_1 } from "./IconChevronLeft-CtO78HWI.js";
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
    t.SENTRY_RELEASE = { id: "1.1.4" };
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "98cdf46b-2f36-403b-a7ae-75d83626dbb0";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-98cdf46b-2f36-403b-a7ae-75d83626dbb0";
    }
  } catch {}
})();
const J = "NdIi";
const K = "gu1d";
const Z = "fD8L";
const ee = "iYPq";
const te = "I4r0";
const ne = "PX1G";
const oe = "YivN";
const ae = "pX6k";
const re = "Fgit";

const o = {
  postPage: J,
  pageHeader: K,
  pageTitle: Z,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: re,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

  const r = setCommentsSort(
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
  } = b_1(
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

  const D = Q_1((e) => e.navigatedInApp) ? "post_page" : "link";

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

  const x = w((e) => e.profile?.id);

  const A = currentPost?.wallOwnerId === x;

  commentsLoadingMore(() => {
    if (!r) {
      window.scrollTo(0, 0);
    }
  }, [postId, r]);

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

  const S = A(null);
  commentsLoadingMore(() => {
    if (!postId || !r) {
      return;
    }
    const e = `${postId}:${r}`;

    if (S.current !== e) {
      S.current = e;
      setHighlightedCommentId(r);
    }
  }, [postId, r, setHighlightedCommentId]);

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

  const W = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const b = q(
    async (e) => {
      if (postId) {
        try {
          const s = `voice_${Date.now()}.webm`;
          const l = new File([e], s, { type: e.type || "audio/webm" });
          const $ = await r.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: $.id }],
          });
        } catch (s) {
          console.error("Failed to send voice message:", s);
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
                onClick: _,
                children: N_1(W_1, { size: 24 }),
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
                source: D,
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
                  onSortChange: F,
                  onLikeComment: W,
                  onAddComment: w,
                  onVoiceSend: b,
                  onLoadMore: R,
                  isWallOwner: A,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          N_1("div", {
            className: o.fixedInputWrapper,
            children: N_1(R_1, {
              onSubmit: (e, s, l) => w({ text: e, spans: s, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
