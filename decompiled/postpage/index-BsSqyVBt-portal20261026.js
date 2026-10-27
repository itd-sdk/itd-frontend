import {
  A,
  T,
  b,
  h as f_1,
  g,
  i,
  m as j_1,
  a,
  h,
  e as q_1,
  m,
  f_1 as f_1_1,
  T as T_1,
  e,
  C,
  k,
} from "./index-BQxlThnW-portal20261026.js";

import { I as I_1 } from "./IconChevronLeft-DWLxrxwS-portal20261026.js";
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
      t._sentryDebugIds[a] = "fc9750c4-86b5-4ef6-866c-3bf916e0f966";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-fc9750c4-86b5-4ef6-866c-3bf916e0f966";
    }
  } catch {}
})();
const Q = "N6PO";
const X = "ZetU";
const I = "SuFJ";
const ee = "Ko83";
const te = "x0D4";
const ne = "bGpH";
const oe = "zZuG";
const ae = "ua4r";
const re = "xA2Z";

const o = {
  postPage: Q,
  pageHeader: X,
  pageTitle: I,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: re,
};

export function PostPage({ postId, comment }) {
  const i = commentsSort(null);

  const r = T(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = b(
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

  const x = i((e) => e.navigatedInApp) ? "post_page" : "link";

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

  const E = comment((e) => e.profile?.id);

  const T = currentPost?.wallOwnerId === E;

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

  const p = commentsSort(null);
  commentsLoadingMore(() => {
    if (!postId || !r) {
      return;
    }
    const e = `${postId}:${r}`;

    if (p.current !== e) {
      p.current = e;
      setHighlightedCommentId(r);
    }
  }, [postId, r, setHighlightedCommentId]);

  const _ = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      T_1("/");
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

  const U = (e) => {
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
          const s = `voice_${Date.now()}.webm`;
          const l = new File([e], s, { type: e.type || "audio/webm" });
          const W = await fetchComments.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: W.id }],
          });
        } catch (s) {
          console.error("Failed to send voice message:", s);
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
            onClick: () => T_1("/"),
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
                source: x,
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
                  onLikeComment: U,
                  onAddComment: w,
                  onVoiceSend: b,
                  onLoadMore: R,
                  isWallOwner: T,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          f_1_1("div", {
            className: o.fixedInputWrapper,
            children: f_1_1(comments, {
              onSubmit: (e, s, l) => w({ text: e, spans: s, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
