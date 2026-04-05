import { b, y, ac } from "./index-3JkKRUnj.js";

export function Verification(t) {
  const e = b((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ac));
  }, [e]);

  return null;
}

export { Verification as Verification };
