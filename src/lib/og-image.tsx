import React from "react";
import { SITE_TITLE } from "@/consts";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";

const fontDir = join(process.cwd(), "src", "assets", "fonts");
const geistFontDir = join(fontDir, "geist");
const cjkFontDir = join(fontDir, "noto-sans-tc");

const fontRegular = readFileSync(join(geistFontDir, "Geist-Regular.ttf"));
const fontBold = readFileSync(join(geistFontDir, "Geist-Bold.ttf"));
const cjkRegular = readFileSync(join(cjkFontDir, "NotoSansTC-Regular.ttf"));
const cjkBold = readFileSync(join(cjkFontDir, "NotoSansTC-Bold.ttf"));

interface OgImageOptions {
  title: string;
  description?: string;
  category?: string;
}

export async function renderOgImage({
  title,
  description,
  category,
}: OgImageOptions): Promise<Buffer> {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f1729 100%)",
          color: "#fafafa",
          fontFamily: "Geist, NotoTC",
        },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: "24px" },
              children: [
                category && {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignSelf: "flex-start",
                      padding: "8px 20px",
                      borderRadius: "9999px",
                      background: "#fafafa",
                      color: "#0a0a0a",
                      fontSize: "28px",
                      fontWeight: 700,
                    },
                    children: category,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: "72px",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                    },
                    children: title,
                  },
                },
                description && {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: "32px",
                      color: "#a1a1aa",
                      lineHeight: 1.4,
                    },
                    children: description,
                  },
                },
              ].filter(Boolean),
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "28px",
                color: "#a1a1aa",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontWeight: 700,
                      color: "#fafafa",
                    },
                    children: SITE_TITLE,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { display: "flex" },
                    children: "blog.tantuyu.dev",
                  },
                },
              ],
            },
          },
        ],
      },
    } as React.ReactElement,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: fontRegular, weight: 400, style: "normal" },
        { name: "Geist", data: fontBold, weight: 700, style: "normal" },
        {
          name: "NotoTC",
          data: cjkRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "NotoTC",
          data: cjkBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  return await sharp(Buffer.from(svg))
    .png({ compressionLevel: 6, quality: 80, palette: true })
    .toBuffer();
}
