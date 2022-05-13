import { TOKEN_KEY } from "@/constant";
import Cookies from "js-cookie";

export function getTokenFromCookie() {
  return Cookies.get(TOKEN_KEY);
}

export function setTokenToCookie(token: string) {
  return Cookies.set(TOKEN_KEY, token);
}

export function removeTokenInCookie() {
  return Cookies.remove(TOKEN_KEY);
}
