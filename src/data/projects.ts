import type { ImageMetadata } from "astro";

import thuCourseFrontendCover from "@/assets/projects/thu-course-frontend.png";
import blogV2Cover from "@/assets/projects/blog-v2.png";
import omaLogitechGMouse from "@/assets/projects/oma-logitech-g-mouse.png";

export interface Project {
  name: string;
  type: string;
  year: string;
  description: string;
  technologies: readonly string[];
  cover: ImageMetadata;
  repositoryUrl: string;
}

export const projects = [
  {
    name: "blog.tantuyu.dev",
    type: "個人網站",
    year: "2025",
    description:
      "個人網站，使用 Astro、TypeScript 與 MDX 架設，並使用 Tailwind CSS 進行樣式設計。",
    technologies: ["Astro", "TypeScript", "MDX", "Tailwind CSS"],
    cover: blogV2Cover,
    repositoryUrl: "https://github.com/tantuyutty/blog-v2",
  },
  {
    name: "Logitech G Mouse",
    type: "系統工具",
    year: "2026",
    description:
      "在 Omarchy 上，使用 Rust 與 HID++ 2.0 協議開發的 Logitech G 系列滑鼠設定工具，支援自訂按鍵、DPI。目前確定支援的滑鼠型號有 G PRO X2 SUPERSTRIKE、G304、G305。",
    technologies: ["Rust", "HID++ 2.0", "Logitech G"],
    cover: omaLogitechGMouse,
    repositoryUrl: "https://github.com/tantuyutty/oma-logitech-g-mouse",
  },
  {
    name: "THU Course Frontend",
    type: "校園工具",
    year: "2025",
    description:
      "THU 課程查詢系統的前端專案，並加入排課模擬功能，後期加入登入存儲近期學期課表，並將資料存入 MongoDB。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    cover: thuCourseFrontendCover,
    repositoryUrl: "https://github.com/tantuyutty/thu-course-frontend",
  },
] satisfies readonly Project[];
