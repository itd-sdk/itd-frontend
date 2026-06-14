import {
  A,
  T,
  c,
  N,
  c as c_1,
  R as Q_1,
  R,
  x,
  y,
  A_1 as q_1,
  s,
  a,
  N as N_1,
  e,
  S,
  A as A_1,
} from "./index-BAlLDjSl.js";

import { q_1 as q_1_1 } from "./IconChevronLeft-DL9-Okiv.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "446eb27f-a963-46e1-bc64-98ef9fbab01e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-446eb27f-a963-46e1-bc64-98ef9fbab01e";
    }
  } catch {}
})();
const K = "SpTF";
const J = "gVPK";
const X = "zMsL";
const Z = "nC4O";
const ee = "QgNQ";
const te = "wYzG";
const ne = "nMTs";
const oe = "LdPM";
const ae = "j7As";

const o = {
  postPage: K,
  pageHeader: J,
  pageTitle: X,
  postSection: Z,
  backButton: ee,
  post: te,
  commentsSection: ne,
  fixedInputWrapper: oe,
  notFound: ae,
};

export function PostPage({ postId, comment }) {
  const i = A(null);

  const r = commentsSort(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = currentPost(
    N((e) => ({
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
  } = c_1(
    N((e) => ({
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

  const N = Q_1((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = R(
    N((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = x((e) => e.profile?.id);

  const A = currentPost?.wallOwnerId === x;

  y(() => {
    if (!r) {
      window.scrollTo(0, 0);
    }
  }, [postId, r]);

  y(() => {
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

  y(() => {
    if (r && !commentsLoading && comments.length > 0) {
      setHighlightedCommentId(r);
    }
  }, [r, commentsLoading, comments.length, setHighlightedCommentId]);

  const E = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      N_1("/");
    }
  };

  const D = (e) => {
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

  const b = async (e) => {
    if (postId) {
      await addComment(postId, e);
    }
  };

  const y = q_1(
    async (e) => {
      if (postId) {
        try {
          const s = `voice_${Date.now()}.webm`;
          const g = new File([e], s, { type: e.type || "audio/webm" });
          const R = await s.uploadMedia(g);
          await addComment(postId, {
            text: "",
            attachments: [{ mediaId: R.id }],
          });
        } catch (s) {
          console.error("Failed to send voice message:", s);
        }
      }
    },
    [addComment, postId]
  );

  return currentPostError
    ? comment("div", {
        className: o.notFound,
        children: [
          comment("h2", { children: "Пост не найден" }),
          comment("button", {
            onClick: () => N_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? comment("div", {
        className: o.postPage,
        children: [
          comment("header", {
            className: o.pageHeader,
            children: [
              comment("button", {
                className: o.backButton,
                onClick: E,
                children: comment(q_1_1, { size: 24 }),
              }),
              comment("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          comment("div", {
            className: o.postSection,
            children: [
              comment(e, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: N,
                sourceContext: currentPost.id,
              }),
              comment("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: comment(commentsLoadingMore, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: D,
                  onLikeComment: F,
                  onAddComment: b,
                  onVoiceSend: y,
                  onLoadMore: _,
                  isWallOwner: A,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          comment("div", {
            className: o.fixedInputWrapper,
            children: comment(A_1, {
              onSubmit: (e, s, g) => b({ text: e, spans: s, attachments: g }),
              onVoiceSend: y,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
