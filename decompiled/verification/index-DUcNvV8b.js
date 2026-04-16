import { c, y, ah } from "./index-B0np_7Xy.js";

export function Verification(t) {
  const e = c((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ah));
  }, [e]);

  return null;
}

export { Verification as Verification };
