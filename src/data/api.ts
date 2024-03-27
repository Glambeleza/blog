import { env } from "../env";

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_URL;
  const version = "v1";
  const url = new URL("/api/".concat(version).concat(path), baseUrl);

  return fetch(url, init);
}
