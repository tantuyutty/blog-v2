import { getCollection } from "astro:content";
import { searchPages } from "@/data/search-pages";
import type { SearchDocument } from "@/types/search";

function markdownToPlainText(markdown: string): string {
  return markdown
    .replace(/^---[\s\S]*?---/, " ")
    .replace(/^\s*(?:import|export)\s.+$/gm, " ")
    .replace(/```[^\n]*\n?/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_~`|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeExcerpt(value: string, maxLength = 160): string | undefined {
  if (!value) return undefined;
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}…`;
}

export async function getSearchDocuments(): Promise<SearchDocument[]> {
  const [posts, jottings] = await Promise.all([
    getCollection("blog"),
    getCollection("jotting"),
  ]);

  const postDocuments: SearchDocument[] = posts
    .filter((post) => !post.data.draft || import.meta.env.DEV)
    .map((post) => {
      const body = markdownToPlainText(post.body ?? "");
      const metadata = [
        post.data.title,
        post.data.description,
        post.data.category,
        ...post.data.tags,
      ]
        .filter(Boolean)
        .join(" ");

      return {
        id: `post-${post.id}`,
        kind: "post",
        title: post.data.title,
        href: `/blog/${post.id}`,
        description: post.data.description ?? makeExcerpt(body),
        publishedAt: post.data.pubDate,
        tags: post.data.tags,
        searchText: `${metadata} ${body}`.trim(),
      };
    });

  const jottingDocuments: SearchDocument[] = jottings
    .filter((jotting) => !jotting.data.draft || import.meta.env.DEV)
    .map((jotting) => {
      const body = markdownToPlainText(jotting.body ?? "");
      const date = jotting.data.pubDate.slice(0, 10);

      return {
        id: `jotting-${jotting.id}`,
        kind: "jotting",
        title: `隨筆 · ${date}`,
        href: `/jotting/${jotting.id}`,
        description: makeExcerpt(body),
        publishedAt: jotting.data.pubDate,
        searchText: `隨筆 jotting ${date} ${body}`.trim(),
      };
    });

  return [...searchPages, ...postDocuments, ...jottingDocuments];
}
