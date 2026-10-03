import {
  A,
  a5,
  b,
  a9,
  aa,
  ab,
  ac,
  a5 as a5_1,
  h,
  c as q_1,
  ac as ac_1,
  a9 as a9_1,
  e,
  c,
  ad,
  ae as ae_1,
} from "./index-CsuAWxkQ.js";

import { ae_1 as ae_1_1 } from "./IconChevronLeft-DtJBpQva.js";
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
      t._sentryDebugIds[a] = "dcb1c017-f8a4-4870-8af3-6a3e2adea173";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-dcb1c017-f8a4-4870-8af3-6a3e2adea173";
    }
  } catch {}
})();
const K = "ukVv";
const X = "PIVE";
const Z = "y9fn";
const ee = "QiQG";
const te = "OuHf";
const ne = "pADY";
const oe = "MImY";
const ae = "Lbrc";
const se = "uhkj";

const o = {
  postPage: K,
  pageHeader: X,
  pageTitle: Z,
  postSection: ee,
  backButton: te,
  post: ne,
  commentsSection: oe,
  fixedInputWrapper: ae,
  notFound: se,
};

export function PostPage({ postId, comment }) {
  const i = commentsSort(null);

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

  const E = ab((e) => e.navigatedInApp) ? "post_page" : "link";

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

  const T = a5_1((e) => e.profile?.id);

  const x = currentPost?.wallOwnerId === T;

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

  const S = commentsSort(null);
  fetchPost(() => {
    if (!postId || !s) {
      return;
    }
    const e = `${postId}:${s}`;

    if (S.current !== e) {
      S.current = e;
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
          const W = await ac_1.uploadMedia(l);
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
                onClick: _,
                children: a9_1(ae_1_1, { size: 24 }),
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
                source: E,
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
                  onSortChange: F,
                  onLikeComment: V,
                  onAddComment: w,
                  onVoiceSend: b,
                  onLoadMore: R,
                  isWallOwner: x,
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
