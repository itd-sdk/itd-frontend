import { a9 } from "./index-B74jCtUp.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const a = new e.Error().stack;

    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "6f27894f-b160-457e-8ff7-1be1da3edd99";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-6f27894f-b160-457e-8ff7-1be1da3edd99";
    }
  } catch {}
})();

const s = (e) =>
  e === "window" ? "layer_window" : e === "stain" ? "splash" : e;

export const A = "alice-profile-changed";
function c(e) {
  window.dispatchEvent(new CustomEvent(A, { detail: e }));
}

const d = (e) => ({
  ...e,

  layers: [
    ...(e.window.broken
      ? [
          {
            slot: "window",
            asset: e.window.asset ?? "window_broken",
            setBy: "",
            setAt: "",
          },
        ]
      : []),
    ...(e.curtains.closed
      ? [
          {
            slot: "curtains",
            asset: "curtain_spread",
            setBy: e.profileId,
            setAt: "",
          },
        ]
      : []),
  ],

  placements: e.placements.map((a) => ({
    ...a,
    kind: a.kind === "stain" ? "splash" : "sticker",

    wear: {
      stage: a.wear,
      float: 0,
      holes: 0,
      seed: 0,
      erasesLeft: Math.max(0, 4 - a.wear),
    },
  })),
});

const l = {
  profileRaw: (e) =>
    a9.get(`/v1/aliceai/profiles/${encodeURIComponent(e)}`, {
      skipErrorToast: true,
    }),
  profile: async (e) => d(await l.profileRaw(e)),
  throwBalloon: (e, a, o, n) =>
    a9.post(
      `/v1/aliceai/profiles/${encodeURIComponent(e)}/balloons`,
      { inventoryItemId: a, ...o },
      { headers: { "Idempotency-Key": n }, skipErrorToast: true }
    ),
  setCurtains: (e, a) =>
    a9.put(
      `/v1/aliceai/profiles/${encodeURIComponent(e)}/curtains`,
      { closed: a },
      { skipErrorToast: true }
    ),
  donateCurtains: (e, a, o) =>
    a9.post(
      `/v1/aliceai/profiles/${encodeURIComponent(e)}/curtains/donations`,
      { amount: a },
      { headers: { "Idempotency-Key": o }, skipErrorToast: true }
    ),
  balance: () =>
    a9
      .get("/v1/aliceai/balance", { skipErrorToast: true })
      .then((e) => e.balance),
  nicknames: () => a9.get("/v1/aliceai/nicknames", { skipErrorToast: true }),
  setActiveNickname: (e) =>
    a9.put(
      "/v1/aliceai/nicknames/active",
      { form: e },
      { skipErrorToast: true }
    ),
  inventory: async () => ({
    items: (
      await a9.get("/v1/aliceai/inventory", { skipErrorToast: true })
    ).items.map((a) => ({
      ...a,
      kind: s(a.kind),
    })),
  }),
  profileAvatar: () =>
    a9.get("/profile-avatar/", { skipErrorToast: true }).then((e) => e.data),
  removeProfileAvatar: () =>
    a9.delete("/profile-avatar/", { skipErrorToast: true }).then((e) => e.data),
  place: (e, a, o, n, r) =>
    a9.post(
      `/v1/aliceai/profiles/${encodeURIComponent(e)}/placements`,
      { inventoryItemId: a, ...o, ...(r ? { anchor: r } : {}) },
      { headers: { "Idempotency-Key": n } }
    ),
  breakWindow: (e, a, o) =>
    a9.post(
      `/v1/aliceai/profiles/${encodeURIComponent(e)}/window/break`,
      { inventoryItemId: a },
      { headers: { "Idempotency-Key": o } }
    ),
  erase: (e, a, o) =>
    a9.post(
      `/v1/aliceai/profiles/${encodeURIComponent(
        e
      )}/placements/${encodeURIComponent(a)}/erase`,
      {},
      { headers: { "Idempotency-Key": o } }
    ),
};

export { A as A, l as a, c as n };
