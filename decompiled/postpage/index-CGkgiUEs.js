import {
  A,
  T,
  b,
  f,
  g,
  i,
  j,
  a,
  h,
  q,
  m,
  f as f_1,
  g as g_1,
  e,
  C,
  k,
} from "./index-GOT6tyDH.js";
import { I as I_1 } from "./IconChevronLeft-BFqryDV6.js";
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
      t._sentryDebugIds[a] = "579e77b1-4c92-4ce9-9458-d17413c72c1b";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-579e77b1-4c92-4ce9-9458-d17413c72c1b";
    }
  } catch {}
})();
const X = "VcQh";
const Z = "vMRA";
const I = "cpmu";
const ee = "BEfv";
const te = "tvTb";
const ne = "VOwP";
const oe = "O92t";
const ae = "j0ao";
const se = "BbvG";

const o = {
  postPage: X,
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
  const i = setCommentsSort(null);

  const s = commentsSort(
    () =>
      comment ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [comment]
  );

  const { currentPost, currentPostError, fetchPost } = b(
    commentsLoadingMore((e) => ({
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
    commentsLoadingMore((e) => ({
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

  const H = i((e) => e.navigatedInApp) ? "post_page" : "link";

  if (postId && i.current !== postId) {
    i.current = postId;
    clearComments();
  }

  const { commentsSort, setCommentsSort } = j(
    commentsLoadingMore((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = comment((e) => e.profile?.id);

  const D = currentPost?.wallOwnerId === x;

  h(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [postId, s]);

  h(() => {
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

  const S = setCommentsSort(null);
  h(() => {
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
      g_1("/");
    }
  };

  const R = (e) => {
    setCommentsSort(e);

    if (postId) {
      fetchComments(postId);
    }
  };

  const B = () => {
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

  const b = q(
    async (e) => {
      if (postId) {
        try {
          const r = `voice_${Date.now()}.webm`;
          const l = new File([e], r, { type: e.type || "audio/webm" });
          const V = await fetchComments.uploadMedia(l);
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
    ? f_1("div", {
        className: o.notFound,
        children: [
          f_1("h2", { children: "Пост не найден" }),
          f_1("button", {
            onClick: () => g_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : currentPost
    ? f_1("div", {
        className: o.postPage,
        children: [
          f_1("header", {
            className: o.pageHeader,
            children: [
              f_1("button", {
                className: o.backButton,
                onClick: _,
                children: f_1(I_1, { size: 24 }),
              }),
              f_1("h1", { className: o.pageTitle, children: "Пост" }),
            ],
          }),
          f_1("div", {
            className: o.postSection,
            children: [
              f_1(e, {
                className: o.post,
                post: currentPost,
                variant: "modal",
                source: H,
                sourceContext: currentPost.id,
              }),
              f_1("div", {
                className: o.commentsSection,
                "data-comments-section": true,
                children: f_1(commentsHasMore, {
                  comments: comments,
                  isLoading: commentsLoading,
                  isLoadingMore: commentsLoadingMore,
                  hasMore: commentsHasMore,
                  sort: commentsSort,
                  onSortChange: R,
                  onLikeComment: F,
                  onAddComment: w,
                  onVoiceSend: b,
                  onLoadMore: B,
                  isWallOwner: D,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          f_1("div", {
            className: o.fixedInputWrapper,
            children: f_1(commentsLoading, {
              onSubmit: (e, r, l) => w({ text: e, spans: r, attachments: l }),
              onVoiceSend: b,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
