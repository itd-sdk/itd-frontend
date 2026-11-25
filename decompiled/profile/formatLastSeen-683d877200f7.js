import {
  ar,
  aw as d_1,
  h,
  as,
  at,
  au,
  av,
  aw,
  ax,
  ay,
  az,
  aA,
} from "./index-4cbec7521f6a.js";
const o = new Map();
aA(() => {
  o.clear();
});
function K(t, n = true, s = true) {
  const a = ar()?.id;
  const u = as();
  const r = a && t ? `${u}:${a}:${t}` : "";
  const [, f] = d_1(0);
  h(() => {
    if (!r || !t || !n) {
      return;
    }
    let l = o.get(r);
    if (!l) {
      if (o.size >= 20) {
        for (const [i, g] of o) {
          if (!g.listeners.size) {
            o.delete(i);
            break;
          }
        }
      }
      l = { profile: null, updatedAt: 0, revision: 0, listeners: new Set() };
      o.set(r, l);
    }
    const e = l;

    const v = () => f((i) => i + 1);

    e.listeners.add(v);

    const m = (i = false) => {
      if (
        !av(u) ||
        o.get(r) !== e ||
        e.pending ||
        (!i && Date.now() - e.updatedAt <= 60000) /* 6e4 */
      ) {
        return;
      }

      if (i && e.profile) {
        e.profile = aw(e.profile, false);
        e.listeners.forEach((c) => c());
      }

      const e_revision = e.revision;

      const b = ax
        .getProfileByUsername(t, { force: true, silent: true })
        .then((c) => {
          if (av(u) && o.get(r) === e && e.revision === e_revision) {
            e.profile = aw(c);

            a &&
              t !== a &&
              c.displayName &&
              ay({
                ownerId: a,
                peerId: t,
                displayName: c.displayName,
                session: u,
              });

            e.updatedAt = Date.now();
            e.listeners.forEach((z) => z());
          }
        })
        .catch(() => {})
        .finally(() => {
          if (e.pending === b) {
            e.pending = undefined;
          }
        });

      e.pending = b;
    };

    const h = () => {
      e.revision++;
      e.updatedAt = 0;
      e.pending = undefined;

      if (e.profile) {
        e.profile = aw(e.profile, false);
      }

      e.listeners.forEach((i) => i());

      m(true);
    };

    const $ = s ? at(h) : () => {};

    const A = s
      ? au((i) => {
          if (!i || i === t) {
            h();
          }
        })
      : () => {};

    const y = () => {
      if (document.visibilityState === "visible") {
        h();
      }
    };

    const S = s
      ? setInterval(() => {
          if (
            typeof document === "undefined" ||
            document.visibilityState === "visible"
          ) {
            m(true);
          }
        }, 30000 /* 3e4 */)
      : undefined;

    m(s);

    if (s && typeof document !== "undefined") {
      document.addEventListener("visibilitychange", y);
    }

    v();

    return () => {
      $();
      A();
      clearInterval(S);
      e.listeners.delete(v);

      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", y);
      }
    };
  }, [r, t, n, u, s]);
  const p = r && n ? o.get(r) : undefined;
  return p?.profile ? aw(p.profile, az() && p.listeners.size > 0) : null;
}

export function a(t, n) {
  return `${n === "male" ? "был" : n === "female" ? "была" : "был(а)"} ${
    j(t) ?? "недавно"
  }`;
}

function w(t, n, s, a) {
  const u = Math.abs(t);
  const r = u % 10;
  const f = u % 100;
  return f >= 11 && f <= 19 ? a : r === 1 ? n : r >= 2 && r <= 4 ? s : a;
}
function j(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const n = t.value ?? 1;
      const s = w(n, "минуту", "минуты", "минут");
      return `${n} ${s} назад`;
    }
    case "hours": {
      const n = t.value ?? 1;
      const s = w(n, "час", "часа", "часов");
      return `${n} ${s} назад`;
    }
    case "recently": {
      return "недавно";
    }
    case "this_week": {
      return "на этой неделе";
    }
    case "this_month": {
      return "в этом месяце";
    }
    case "long_ago": {
      return "давно";
    }
    default: {
      return null;
    }
  }
}
export { a as a, j as f, K as u };
