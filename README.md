# Astro Starter Kit: Blog

```sh
pnpm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- Astro content collections for Markdown and MDX articles and jottings
- Static Open Graph images, sitemap, RSS feed, and canonical metadata
- Persistent light and dark themes
- Global page and content search with keyboard navigation

## Global search

Use the search control in the site header or press `Ctrl+K` / `⌘K`. The search
dialog can navigate to pages, articles, jottings, and related links (GitHub,
email, and RSS), or switch the active theme. Its static index is generated at
`/search-index.json` from the content collections, `src/data/search-pages.ts`,
and `src/data/social-links.ts`.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

Requires Node.js 22 or later and pnpm 10.11.1.

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies and Git hooks              |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm deploy`          | Build and deploy the site to Cloudflare Workers  |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm fmt`             | Formats the repository with Prettier             |
| `pnpm fmt:check`       | Checks repository formatting                     |

Husky runs `lint-staged` before every commit. Staged files supported by Prettier are
formatted and re-staged automatically; unsupported files are left unchanged.

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
