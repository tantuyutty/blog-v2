import type { PreparedSearchDocument, SearchDocument } from "@/types/search";

const titleCollator = new Intl.Collator("zh-Hant", {
  numeric: true,
  sensitivity: "base",
});

export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("zh-Hant-TW")
    .replace(/\s+/g, " ")
    .trim();
}

export function prepareSearchDocuments(
  documents: SearchDocument[],
): PreparedSearchDocument[] {
  return documents.map((document) => ({
    document,
    normalizedTitle: normalizeSearchText(document.title),
    normalizedDescription: normalizeSearchText(document.description ?? ""),
    normalizedTags: normalizeSearchText(document.tags?.join(" ") ?? ""),
    normalizedSearchText: normalizeSearchText(document.searchText),
  }));
}

function scoreTerm(document: PreparedSearchDocument, term: string): number {
  if (document.normalizedTitle === term) return 160;
  if (document.normalizedTitle.startsWith(term)) return 120;
  if (document.normalizedTitle.includes(term)) return 100;
  if (document.normalizedTags.includes(term)) return 60;
  if (document.normalizedDescription.includes(term)) return 35;
  if (document.normalizedSearchText.includes(term)) return 10;
  return 0;
}

export function searchDocuments(
  documents: PreparedSearchDocument[],
  query: string,
  limit = 10,
): SearchDocument[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  const terms = normalizedQuery.split(" ");

  return documents
    .map((document) => {
      const scores = terms.map((term) => scoreTerm(document, term));
      if (scores.some((score) => score === 0)) return null;

      let score = scores.reduce((total, current) => total + current, 0);
      if (document.normalizedTitle === normalizedQuery) score += 80;
      else if (document.normalizedTitle.startsWith(normalizedQuery))
        score += 40;
      else if (document.normalizedTitle.includes(normalizedQuery)) score += 20;

      return { document: document.document, score };
    })
    .filter(
      (
        result,
      ): result is {
        document: SearchDocument;
        score: number;
      } => result !== null,
    )
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      const dateComparison = (b.document.publishedAt ?? "").localeCompare(
        a.document.publishedAt ?? "",
      );
      if (dateComparison !== 0) return dateComparison;
      return titleCollator.compare(a.document.title, b.document.title);
    })
    .slice(0, limit)
    .map(({ document }) => document);
}
