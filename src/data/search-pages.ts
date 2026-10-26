import type { SearchDocument } from "@/types/search";

export const searchPages: SearchDocument[] = [
  {
    id: "page-home",
    kind: "page",
    title: "首頁",
    href: "/",
    icon: "house",
    description: "休息一下，看看最新文章。",
    searchText: "首頁 home 休息一下 最新文章",
  },
  {
    id: "page-blog",
    kind: "page",
    title: "文章",
    href: "/blog",
    icon: "pen-tool",
    description: "技術、生活與學習歷程的文章。",
    searchText: "文章 部落格 blog 技術文章",
  },
  {
    id: "page-jotting",
    kind: "page",
    title: "隨筆",
    href: "/jotting",
    icon: "book-open-text",
    description: "一些長短不一的個人抒發。",
    searchText: "隨筆 短文 日記 想法 jotting",
  },
  {
    id: "page-about",
    kind: "page",
    title: "關於",
    href: "/about",
    icon: "user",
    description: "關於 tantuyu、經歷與簡報。",
    searchText: "關於 tantuyu 自我介紹 經歷 簡報 about",
  },
];
