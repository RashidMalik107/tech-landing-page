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
