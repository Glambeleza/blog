import { env } from "../env";

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_URL;
  const apiPrefix = "/api".concat(path);
  const url = new URL(apiPrefix, baseUrl);

  return fetch(baseUrl.concat(path), init);
}
