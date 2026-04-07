import { b, y, af } from "./index-BzlbFDoq.js";

export function Verification(t) {
  const e = b((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(af));
  }, [e]);

  return null;
}

export { Verification as Verification };
