# kutayertug.com — Personal Website & Blog Client

A Vue 3 client for a personal website and technical blog, built with Vite and Tailwind CSS.

This project is the frontend of a personal brand site: a portfolio that introduces the owner and a blog that publishes technical writing. The interface is designed to make a strong first impression and guide visitors toward a clear action — getting in touch, exploring the work, or reading an article.

The site is content-driven. Blog posts and author details come from the backend API, while shared contact details and the site tagline live in configuration. The owner can replace the copy and content without changing the layout.

The intended backend is [portfolio-api](https://github.com/kutayertugates/portfolio-api). This client was designed to run against that API; see its repository for setup instructions and the authoritative endpoint reference.

The current interface copy is in Turkish and can be replaced freely.

## Overview

The project is a single-page application with two complementary halves:

- **Portfolio** — a home page with a clear introduction, areas of focus, latest writing, and a contact call to action; an about page covering the owner's approach, principles, tools, and contact details.
- **Blog** — a paginated list of posts with loading and empty states, plus individual post pages that render the full article content from the API.

Both parts share a minimal, content-first design system: generous whitespace, flat surfaces, thin borders, one accent color, and full dark-mode support.

## Features

- Vue 3 Composition API with `<script setup>` components
- Client-side routing with Vue Router (history mode)
- Tailwind CSS v4 through the official Vite plugin
- Light theme by default, with dark theme driven by the system preference
- Responsive layout, including a collapsible mobile navigation
- Accessible markup: semantic sections, ARIA labels, visible focus rings, and labeled form fields
- Blog list with pagination, loading skeleton, and empty state
- Blog detail pages with formatted article content and author metadata
- Contact form with server-side validation errors and success/error feedback
- Blog content served by a REST API through a small typed-by-convention service layer
- Shared ESLint, Oxlint, and Prettier configuration

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build tool | Vite 8 |
| Routing | Vue Router 5 |
| State | Pinia 4 (installed and registered; no stores yet) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Icons | Font Awesome Free |
| Linting | ESLint, Oxlint, `eslint-config-prettier` |
| Formatting | Prettier |
| Script runner | `npm-run-all2` |

## Requirements

- Node.js `^22.18.0` or `>=24.12.0`
- npm (a `package-lock.json` is included)

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Configure the API

This client is designed to work with [portfolio-api](https://github.com/kutayertugates/portfolio-api). Start that service locally or deploy it, then set `API_BASE_URL` in `src/config/index.js` to its address:

```js
const config = {
  API_BASE_URL: 'http://api.local',
  contacts: {
    email: 'kutayertug@gmail.com',
  },
  slogan: '...',
}
```

The same file provides the contact email used across the home, about, contact, and footer sections, along with the site tagline. The object is frozen, so treat it as read-only application configuration.

No environment variables are required at the moment; the configuration is read directly from this module.

### 3. Start the development server

```sh
npm run dev
```

Vite prints the local URL (typically `http://localhost:5173`). Hot module replacement is enabled.

### 4. Build for production

```sh
npm run build
```

The production bundle is written to `dist/`. Preview it locally with:

```sh
npm run preview
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run all linters (`lint:oxlint` and `lint:eslint`) |
| `npm run lint:oxlint` | Run Oxlint over the project and apply fixes |
| `npm run lint:eslint` | Run ESLint and apply fixes, using a cache |
| `npm run format` | Format `src/` with Prettier |

Note that both lint scripts run with `--fix`, so they may rewrite files.

## Configuration Reference

`src/config/index.js`:

| Key | Purpose |
| --- | --- |
| `API_BASE_URL` | Base URL prefix for every API request |
| `contacts.email` | Contact email address used across the site |
| `slogan` | Site tagline |

## Backend API Contract

The reference backend for this client is [portfolio-api](https://github.com/kutayertugates/portfolio-api). Check that repository for the authoritative schema, environment setup, and any newer endpoints.

The frontend expects a JSON REST API. Requests are sent through `src/api/client.js`, which adds a `Content-Type: application/json` header and throws when a response is not OK.

| Method | Endpoint | Used by | Purpose |
| --- | --- | --- | --- |
| `GET` | `/blogs?page={page}&limit={limit}` | `BlogService.getAll` | Paginated blog list |
| `GET` | `/blogs/slug/{slug}` | `BlogService.getBySlug` | Single blog post by slug |
| `GET` | `/user/{id}` | `UserService.getById` | Author profile for a post |
| `POST` | `/contacts` | Contact form | Submit a contact message |

Response shapes used by the UI:

- Blog list: `{ data: Blog[], metadata: { total_page: number } }`
- Single blog: `{ data: Blog }`
- Author: `{ data: { username, first_name, last_name } }`
- Contact form success: `{ status, message }`
- Contact form validation error: `{ status: 'error', message, errors: { fullname?, email?, subject?, message? } }`

A `Blog` object is expected to include at least `id`, `slug`, `title`, `description`, `content`, `cover_image`, `published_at`, and `author_id`.

Blog `content` is rendered as HTML on the detail page. Serve only trusted, sanitized content from the API.

## Project Structure

```text
src/
├── api/
│   └── client.js                 # Shared fetch wrapper
├── components/
│   └── layout/                   # Global layout components (navbar, footer)
├── config/
│   └── index.js                  # API URL, contact email, slogan
├── pages/
│   ├── home/
│   │   ├── components/
│   │   │   ├── blog/             # Home blog item, empty and loading states
│   │   │   └── layout/           # Header, about, focus, writing, contact
│   │   └── PageHome.vue
│   ├── about/
│   │   ├── components/layout/    # Header, approach, principles, stack, contact
│   │   └── PageAbout.vue
│   ├── blogs/
│   │   ├── components/
│   │   │   ├── blog/             # Blog list item
│   │   │   ├── layout/           # Header and list
│   │   │   └── pagination/       # Pagination controls
│   │   └── PageBlogs.vue
│   ├── blogdetail/
│   │   └── PageBlogDetail.vue
│   └── contact/
│       ├── components/
│       │   ├── form/             # Contact form
│       │   └── layout/           # Header and content
│       └── PageContact.vue
├── router/
│   └── index.js                  # Route definitions
├── services/
│   ├── blog.service.js           # Blog endpoints
│   └── user.service.js           # Author endpoint
├── App.vue                       # Global shell: navbar, main, footer
├── main.js                       # App bootstrap, Pinia, router, styles
└── style.css                     # Tailwind entry point
```

## Routes

| Path | Name | View |
| --- | --- | --- |
| `/` | `home` | `PageHome` |
| `/about` | `about` | `PageAbout` |
| `/blogs` | `blogs` | `PageBlogs` |
| `/blogs/:slug` | `blog-detail` | `PageBlogDetail` |
| `/contact` | `contact` | `PageContact` |

The navigation also links to `/projects`. That route is not implemented yet.

Routing uses `createWebHistory`, so the production server must fall back to `index.html` for unknown paths.

## Design System

The visual language is intentionally minimal and content-led.

- **Palette** — neutral `zinc` surfaces and text, a single `indigo` accent for links and primary actions, and `rose`/`emerald` reserved for error and success feedback.
- **Surfaces** — flat backgrounds with thin borders; no heavy shadows, gradients, or decorative effects.
- **Typography** — hierarchy comes from size and weight; `font-mono` is used for labels, metadata, and technical strings.
- **Corners** — a single `rounded-md` radius across the project.
- **Motion** — only short hover and focus transitions.
- **Theme** — light by default, with `dark:` variants following the operating system preference.

All styling is done with Tailwind utility classes directly in templates. Custom CSS, inline styles, `<style>` blocks, and `@apply` are not used. The only stylesheet entry, `src/style.css`, imports Tailwind itself:

```css
@import 'tailwindcss';
```

## Naming Conventions

- **Files** — `PascalCase` only, with no underscores, hyphens, or spaces. Components are prefixed by their role, for example `ComponentNavbar.vue`, `PageHome.vue`, or `ComponentBlogsPagination.vue`.
- **Variables** — `snake_case`, with descriptive English names such as `contact_errors` or `current_page`.
- **Function parameters** — `snake_case` prefixed with an underscore, for example `_blog_id`.
- **Functions** — `PascalCase` verbs describing the action, for example `FetchBlogList`.

Components live in `src/components` when shared globally, and in `src/pages/<page-name>/components` when specific to one page. Page-specific components follow the same subfolder pattern (`layout`, `form`, `pagination`, and so on).

## Tooling

For the best development experience:

- [VS Code](https://code.visualstudio.com/) with the [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension, with Vetur disabled.
- [Vue.js devtools](https://devtools.vuejs.org/) in Chrome, Edge, Brave, or Firefox.

## Deployment

1. Run `npm run build`.
2. Deploy the contents of `dist/` to any static host or CDN.
3. Configure the host to rewrite unknown paths to `index.html` so client-side routes resolve correctly.
4. Make sure the configured `API_BASE_URL` is reachable from the browser and allows the site's origin (CORS).

## License

Released under the [MIT License](./LICENSE). Copyright (c) 2026 Kutay Ertuğ Ateş.
