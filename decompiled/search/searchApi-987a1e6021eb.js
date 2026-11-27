import { U, V, X, Y } from "./index-4a2211963806.js";
const g = new Y(1, 300 * 1000 /* 1e3 */);
const l = new Y(1, 300 * 1000 /* 1e3 */);
const c = "data";

export const s = {
  async getTrendingHashtags(n = 10) {
    const e = g.get(c);
    if (e) {
      return e;
    }
    const t = await U.get(`${V.hashtags.trending}?limit=${n}`);
    let a;

    if (t.data?.hashtags) {
      a = t.data.hashtags;
    } else if (Array.isArray(t.hashtags)) {
      a = t.hashtags;
    } else if (Array.isArray(t.data)) {
      a = t.data;
    } else {
      a = [];
    }

    const s = a.map((r) => ({
      ...r,
      count: r.count ?? r.postsCount ?? 0,
    }));
    g.set(c, s);
    return s;
  },
  async getPopularAvatars() {
    const n = l.get(c);
    if (n) {
      return n;
    }
    const e = await U.get(V.users.topClans);

    const a = (e.clans || e.data || []).map((s) => ({
      ...s,
      count: s.count ?? s.memberCount ?? 0,
    }));

    l.set(c, a);
    return a;
  },
  async globalSearch(n, e = 5, t = 5) {
    const a = new URLSearchParams({
      q: n,
      userLimit: String(e),
      hashtagLimit: String(t),
    });

    const s = await U.get(`${V.search.global}?${a.toString()}`);
    const r = s.data ?? s;
    return {
      users: (r.users ?? []).map((o) => ({
        ...o,
        halloween: X(o.halloween),
      })),
      hashtags: (r.hashtags ?? []).map((o) => ({
        ...o,
        count: o.count ?? o.postsCount ?? 0,
      })),
    };
  },
};

export { s as s };
