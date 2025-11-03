# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
```bash
npm run dev          # Start dev server with production backend
npm run dev:local    # Start dev server with local backend (uses .env.dev)
npm run build        # Build production site
npm run preview      # Preview build locally
npm run start        # Start production server (dist/server/entry.mjs)
```

**Code Quality:**
```bash
npm run lint         # ESLint check for .js,.jsx,.ts,.tsx,.astro files in src/
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check Prettier formatting
```

**GraphQL:**
```bash
npx graphql-codegen  # Generate GraphQL types and hooks from schema
```

## Architecture

This is an **Astro SSR application** with React integration for interactive components. The project uses:

- **Astro** with server output mode and Node.js adapter
- **React 19** for interactive components with selective hydration
- **Tailwind CSS 4** with DaisyUI for styling
- **Apollo Client** for GraphQL data fetching
- **TypeScript** with strict typing
- **GraphQL Code Generator** for type-safe queries and mutations

### Project Structure

```
src/
├── components/
│   ├── atoms/          # Small reusable components (icons, buttons)
│   ├── molecules/      # Component compositions (cards, forms)
│   │   └── login/      # Login-related components
│   ├── sections/       # Page sections (navbar, footer, banners)
│   └── common/         # Shared utilities (SEO component)
├── pages/              # File-based routing (15 pages)
│   ├── usuario/        # User dashboard pages
│   ├── cursos/         # Course-related pages
│   └── blog/           # Blog pages
├── layouts/            # Page layout templates
├── content/            # Content collections (posts, cursos)
├── graphql-astro/      # GraphQL setup and generated types
│   ├── generated/      # Auto-generated GraphQL types and hooks
│   └── apolloClient.ts # Apollo Client configuration
├── interfaces/         # TypeScript interfaces
├── services/           # Business logic services
└── utils/              # Helper functions
```

### GraphQL Integration

- **Backend:** `https://iqengi-backend-production.up.railway.app/graphql`
- **Generated Types:** All queries/mutations auto-generated in `src/graphql-astro/generated/graphql.ts`
- **Apollo Client:** Configured with credentials support for cookie-based auth
- **Code Generation:** Configured in `codegen.ts` to generate React Apollo hooks

### Component Architecture

- **Atomic Design:** Components organized as atoms → molecules → sections
- **Hydration Strategy:** Uses Astro's selective hydration (`client:load`, `client:visible`, etc.)
- **Mixed Components:** Astro components (`.astro`) for static content, React (`.tsx`) for interactivity
- **Favorites System:** Local storage-based course favorites with `CardsFavorite` and `CursosFavoritosLista` components

### State Management

- **Authentication:** Service-based with `authService.ts`
- **Local Storage:** Used for course favorites with `CursoFavorito` interface
- **Apollo Cache:** In-memory caching for GraphQL data

### Content Management

- **Content Collections:** Configured for posts and courses in `src/content/`
- **MDX Support:** For rich content with frontmatter
- **Blog System:** File-based blog with MDX posts

### Styling Approach

- **Tailwind CSS 4** with utility-first approach
- **DaisyUI** components for consistent UI elements
- **Mobile-first** responsive design
- **Custom CSS:** Minimal, prefers Tailwind utilities

### Development Conventions

- **File Naming:** kebab-case for all files
- **TypeScript:** Strict typing, avoid `any` and `unknown`
- **ESLint Configuration:** Custom config with Astro, TypeScript, and accessibility rules
- **Prettier:** Configured for consistent formatting
- **JSDoc:** Required for complex functions and utilities

### Environment Configuration

- **Server Mode:** SSR with Node.js adapter
- **Railway Deployment:** Configured for automatic deployment
- **Environment Variables:** Used for GraphQL URL and domain configuration
- **Vite Configuration:** Custom setup with Tailwind plugin and Apollo optimization

**Environment Files:**
- `.env.dev` - Local development with local backend (http://localhost:3000/graphql)
- `.env` - Development with production backend
- `.env.production` - Production deployment
- `.env.example` - Template with documentation

To switch backends, copy the appropriate env file:
```bash
cp .env.dev .env       # Use local backend
cp .env.production .env # Use production backend
```