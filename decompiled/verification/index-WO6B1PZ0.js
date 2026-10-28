import { a, h, P } from "./index-AoERIL5v.js";

export function Verification(t) {
  const e = a((i) => i.profile?.isPhoneVerified);

  h(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(P));
  }, [e]);

  return null;
}

export { Verification as Verification };
