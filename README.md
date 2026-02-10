<<<<<<< HEAD
## Tech Landing Page

**Tech Landing Page** is a responsive marketing site built with **React**, **TypeScript**, and **Vite**.  
It showcases a modern fintech-style product with a hero section, feature highlights, logo carousel, and a registration form with basic client-side persistence.

### Features

- **Responsive layout**: Mobile-first layout with a collapsible navigation menu.
- **Hero section**: Eye-catching hero with testimonials and illustration.
- **Highlights**: Three key benefit cards with custom icons.
- **Trusted by carousel**: Auto-advancing logo slider with manual previous/next controls.
- **Registration flow**:
  - Registration form with validation in `RegistrationForm`.
  - Successful submissions are stored in `localStorage` and a personalized confirmation message is shown.
- **Accessible semantics**: Landmarks, ARIA labels, and descriptive alt text for better accessibility.

### Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler/Dev server**: Vite
- **Styling**: Custom CSS (`App.css`, `index.css`)
- **Tooling**: ESLint, TypeScript, Vite React plugin

### Getting Started

**Prerequisites**

- Node.js 18+ (recommended)
- npm (comes with Node)

**Install dependencies**

```bash
npm install
```

**Run the development server**

```bash
npm run dev
```

This will start Vite and print a local URL (usually `http://localhost:5173`) where you can view the site.

**Build for production**

```bash
npm run build
```

The optimized production build will be output to the `dist` directory.

**Preview the production build**

```bash
npm run preview
```

### Project Structure

```text
src/
  App.tsx               # Root layout and navigation
  App.css               # Global page styles
  index.css             # Base styles and resets
  main.tsx              # React/Vite entry point
  components/
    Hero.tsx            # Hero section with testimonials
    Highlights.tsx      # Feature highlight cards
    TrustedBy.tsx       # Logo carousel/slider
    Registration.tsx    # Registration section with success state
    RegistrationForm.tsx# Form logic and validation
  assets/               # Images and icons used across the page
```

### Scripts

- **`npm run dev`**: Start the development server with hot module reloading.
- **`npm run build`**: Type-check and build the app for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint on the project.

### Customization

- Update text content in the components under `src/components` to match your brand and messaging.
- Replace images in `src/assets` with your own assets (logos, hero illustration, testimonials).
- Tweak layout and colors in `App.css` and `index.css` to align with your design system.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
<<<<<<< HEAD
>>>>>>> c6de959 (Initial commit)
=======
# tech-landing-page
>>>>>>> 11c0891 (first commit)
