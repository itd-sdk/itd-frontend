import { K, h, Q } from "./index-4cbec7521f6a.js";

export function Verification(t) {
  const e = K((i) => i.profile?.isPhoneVerified);

  h(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(Q));
  }, [e]);

  return null;
}

export { Verification as Verification };
