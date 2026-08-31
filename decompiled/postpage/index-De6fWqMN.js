import {
  A,
  T,
  b,
  N,
  T as T_1,
  R_1 as Q_1,
  R,
  w,
  h,
  R as R_1,
  r,
  N as N_1,
  e,
  c,
  W,
  r as r_1,
} from "./index-ORJLmKGS.js";

import { I } from "./IconChevronLeft-DN-Go-1D.js";
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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "24fdf4f2-3567-4bc3-877f-1c0ebcff4f21";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-24fdf4f2-3567-4bc3-877f-1c0ebcff4f21";
    }
  } catch {}
})();
const J = "Lkhl";
const K = "gu0A";
const Z = "aOcM";
const ee = "qykN";
const te = "Inpr";
const ne = "xAA1";
const oe = "n4mE";
const ae = "iBu3";
const re = "M2i1";

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
  const i = toggleCommentLike(null);

  const r = T(
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
  } = T_1(
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

  const E = Q_1((e) => e.navigatedInApp) ? "post_page" : "link";

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

  fetchPost(() => {
    if (!r) {
      window.scrollTo(0, 0);
    }
  }, [postId, r]);

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

  const S = toggleCommentLike(null);
  fetchPost(() => {
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

  const R = (e) => {
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

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const b = R_1(
    async (e) => {
      if (postId) {
        try {
          const s = `voice_${Date.now()}.webm`;
          const l = new File([e], s, { type: e.type || "audio/webm" });
          const B = await r.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: B.id }],
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
                children: N_1(I, { size: 24 }),
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
                source: E,
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
                  onSortChange: R,
                  onLikeComment: W,
                  onAddComment: w,
                  onVoiceSend: b,
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
            children: N_1(r_1, {
              onSubmit: (e, s, l) => w({ text: e, spans: s, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
