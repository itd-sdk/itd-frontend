import {
  A,
  a5,
  A as A_1,
  a9,
  aa,
  ab,
  ac,
  ac as ac_1,
  h,
  aa as aa_1,
  Q,
  a9 as a9_1,
  e,
  c,
  ad,
  ae as ae_1,
} from "./index-DqQficWb.js";

import { I } from "./IconChevronLeft-BgCU8yQL.js";
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
      t._sentryDebugIds[a] = "042f4c02-7d54-487a-a2c2-7f62fba04c9a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-042f4c02-7d54-487a-a2c2-7f62fba04c9a";
    }
  } catch {}
})();
const J = "Iqsf";
const K = "Y4eg";
const Z = "rCwg";
const ee = "tVv0";
const te = "Dqgy";
const ne = "gXy8";
const oe = "x0Rh";
const ae = "UMF4";
const se = "k6gH";

const o = {
  postPage: J,
  pageHeader: K,
  pageTitle: Z,
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

  const { currentPost, currentPostError, fetchPost } = A_1(
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

  const x = ab((e) => e.navigatedInApp) ? "post_page" : "link";

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

  const T = ac_1((e) => e.profile?.id);

  const A = currentPost?.wallOwnerId === T;

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

  const p = A(null);
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

  const U = (e) => {
    toggleCommentLike(e);
  };

  const w = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = aa_1(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const V = await Q.uploadMedia(l);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: V.id }],
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
                source: x,
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
                  onLikeComment: U,
                  onAddComment: w,
                  onVoiceSend: y,
                  onLoadMore: R,
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
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
