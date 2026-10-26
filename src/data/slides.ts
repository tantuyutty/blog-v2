import type { ImageMetadata } from "astro";

import slideUnUsefulTool from "@/assets/slides/20260430-un-useful-tool.png";
import slideGitForensics from "@/assets/slides/20260423-git-and-forensics.png";
import slideLinux101 from "@/assets/slides/20250925-linux.png";

export interface Slide {
  title: string;
  date: string;
  cover: ImageMetadata;
  href: string;
}

export const slides: Slide[] = [
  {
    title: "最無／有用的工具",
    date: "2026.04.30",
    cover: slideUnUsefulTool,
    href: "https://url.ttymayor.com/un-useful-tool",
  },
  {
    title: "Git & Forensics",
    date: "2026.04.23",
    cover: slideGitForensics,
    href: "https://url.ttymayor.com/git-forensics",
  },
  {
    title: "Linux — 你應該要認識的企鵝",
    date: "2025.09.25",
    cover: slideLinux101,
    href: "https://url.ttymayor.com/20250925-linux",
  },
];
