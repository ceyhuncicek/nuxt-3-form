# Nuxt 3 Form Project

A simple form application built with Nuxt 3. The project focuses on minimalism, accessibility, and responsive design using ProvetCloud components.

## Key Features

- Built with ProvetCloud components
- Fully accessible with ARIA support and keyboard navigation
- Mobile-first responsive design
- Minimal and efficient codebase
- Two main pages:
  - `/`: Main form page
  - `/success`: Success confirmation page

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Run tests
yarn test
```

The application will be available at `http://localhost:3000`

## Tech Stack

- Nuxt 3
- Vue 3
- TypeScript
- ProvetCloud Components
- Vitest for Testing

## Project Structure

```
├── components/    # Reusable Vue components
├── pages/         # Application pages/routes
│   ├── index.vue  # Main form page
│   └── success.vue# Success page
├── layouts/       # Page layouts
├── composables/   # Composable functions
├── utils/         # Utility functions
├── test/          # Test files
└── assets/        # Static assets
```

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run tests

## Accessibility

The application follows WCAG guidelines with:

- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly structure
