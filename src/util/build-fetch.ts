import type { Enhancer, Handler } from "@/types.ts";

export function buildFetch(enhancer?: Enhancer) {
  let innerFetch: Handler = (request) => fetch(request);

  if (enhancer) {
    innerFetch = enhancer(innerFetch);
  }

  return (url: string | URL, options?: RequestInit) =>
    Promise.resolve(innerFetch(new Request(url, options)));
}
