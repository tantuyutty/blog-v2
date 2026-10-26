export type SearchDocumentKind = "page" | "post" | "jotting";

export interface SearchDocument {
  id: string;
  kind: SearchDocumentKind;
  title: string;
  href: string;
  description?: string;
  publishedAt?: string;
  tags?: string[];
  searchText: string;
}

export interface PreparedSearchDocument {
  document: SearchDocument;
  normalizedTitle: string;
  normalizedDescription: string;
  normalizedTags: string;
  normalizedSearchText: string;
}
