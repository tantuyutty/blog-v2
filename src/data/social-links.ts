import { siGithub, siGmail, siRss, type SimpleIcon } from "simple-icons";

export interface SocialLink {
  id: string;
  href: string;
  label: string;
  description: string;
  searchText: string;
  icon: SimpleIcon;
}

export const socialLinks = [
  {
    id: "github",
    href: "https://github.com/tantuyutty",
    label: "GitHub",
    description: "github.com/tantuyutty",
    searchText: "GitHub 程式碼 原始碼 社群 聯絡 相關連結 link contact social",
    icon: siGithub,
  },
  {
    id: "email",
    href: "mailto:hi@ttymayor.com",
    label: "Email",
    description: "hi@ttymayor.com",
    searchText: "Email 信箱 電子郵件 郵件 聯絡 相關連結 link mail contact",
    icon: siGmail,
  },
  {
    id: "rss",
    href: "/rss.xml",
    label: "RSS",
    description: "訂閱網站的最新文章",
    searchText: "RSS Feed 訂閱 最新文章 XML 相關連結 link",
    icon: siRss,
  },
] satisfies SocialLink[];
