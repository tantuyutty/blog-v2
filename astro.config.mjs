import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import rehypeSlug from "rehype-slug";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import rehypePrismPlus from "rehype-prism-plus";
import { satteri } from "@astrojs/markdown-satteri";
import { unified } from "@astrojs/markdown-remark";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.tantuyu.dev",
  prefetchAll: false,
  fonts: [
    {
      name: "Noto Sans TC",
      cssVariable: "--font-noto-sans-tc",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/noto-sans-tc/NotoSansTC-Regular.woff2",
              "./src/assets/fonts/noto-sans-tc/NotoSansTC-Regular.ttf",
            ],
            weight: 400,
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/noto-sans-tc/NotoSansTC-Bold.woff2",
              "./src/assets/fonts/noto-sans-tc/NotoSansTC-Bold.ttf",
            ],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
  markdown: {
    processor: satteri({
      features: { math: true, gfm: true, directive: true },
    }),
  },
  integrations: [
    mdx({
      syntaxHighlight: false,
      processor: unified({
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
      }),
    }),
    sitemap({
      filter: (page) =>
        page !== "https://v2.ttymayor.com/blog/2026/03/new-relationship/" &&
        page !== "https://v2.ttymayor.com/blog/2026/02/i-am-who-i-am/" &&
        page !== "https://v2.ttymayor.com/diff/" &&
        page !== "https://v2.ttymayor.com/blog/2026/04/am-i-the-problem/",
    }),
    react(),
    partytown(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
