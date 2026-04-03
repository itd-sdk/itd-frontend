import { b, y, ak } from "./index-DROXNMnR.js";

export function Verification(t) {
  const e = b((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ak));
  }, [e]);

  return null;
}

export { Verification as Verification };
