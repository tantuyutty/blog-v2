import type { APIRoute } from "astro";
import { getSearchDocuments } from "@/lib/search-index";

export const prerender = true;

export const GET: APIRoute = async () => {
  const documents = await getSearchDocuments();

  return new Response(JSON.stringify(documents), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
