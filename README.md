# React Portfolio

## Setup & Run

- **Requirements:** Node.js 16+ and npm.
- Install dependencies:

```bash
npm install
```

- Run the dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

- Lint the codebase:

```bash
npm run lint
```

## Component tree and state-lifting decisions

- **Top-level layout:** `App.jsx` composes the app inside `ThemeProvider` and renders page routes. Pages live under `src/pages/` and shared UI components are under `src/components/`.
- **Theme (global state):** Theme is managed in `ThemeProvider` (context + `localStorage`). This state is lifted to a provider because multiple components (the root app, the `Navbar`/`ThemeToggle`, and styling roots) need access to the current theme. Persisting in `localStorage` provides a remembered preference between visits.
- **Local component state:** UI-specific state remains local to the component that owns it:
  - `ContactForm.jsx` keeps form fields, validation errors and submitted state locally.
  - `HomePage.jsx` uses a local `loading` boolean to show an initial loading state.
  - `ProjectsPage.jsx` consumes project data from `src/data/projects.js` (or from a `projectsList` prop) and does not require lifting.

These choices aim to keep the global context minimal (only truly shared concerns like theme) and keep component logic encapsulated where possible.

## useEffect hooks implemented (and why)

- **`src/components/ThemeProvider.jsx`**
  - Effect: persist `theme` to `localStorage` whenever it changes.
  - Why: keeps the user's theme preference across page reloads and sessions. Wrapped in try/catch to tolerate environments where `localStorage` is unavailable.

- **`src/App.jsx` — `ScrollToTop` helper**
  - Effect: `useEffect(() => { window.scrollTo(0,0) }, [pathname])` that runs when the route `pathname` changes.
  - Why: ensures the viewport resets to the top when navigating between pages (improves UX for long pages).

- **`src/App.jsx` — `ResponsiveNavTracker` helper**
  - Effect: attach a `resize` listener on mount that sets `document.documentElement.dataset.breakpoint` and removes it on cleanup.
  - Why: centralizes a small responsive flag so CSS/JS can adapt to `mobile|tablet|desktop` breakpoints without re-querying `window.innerWidth` everywhere.

- **`src/pages/HomePage.jsx`**
  - Effect: a mount-only timer that clears `loading` after ~700ms, with cleanup to `clearTimeout`.
  - Why: provides a short loading/entrance state to show a spinner and avoid layout jank on initial render.

If you want I can expand any section with file-level links or add additional explanation for particular components.
# React + Vite

## Interactive Multi-Page Portfolio

An interactive personal portfolio built with React, featuring client-side routing, state management, React Hooks, side effects, reusable components, prop drilling, theme persistence, and a controlled contact form.

The application includes multiple pages, dynamic project routes, responsive design, dark/light theme switching, form validation, scroll restoration, and a custom 404 page.

## Default Vite Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
