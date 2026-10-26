export type SearchDocumentKind = "page" | "post" | "jotting" | "link";
export type SearchDocumentIcon =
  "house" | "pen-tool" | "book-open-text" | "user" | "file";

export interface SearchDocument {
  id: string;
  kind: SearchDocumentKind;
  title: string;
  href: string;
  description?: string;
  icon?: SearchDocumentIcon;
  iconPath?: string;
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
