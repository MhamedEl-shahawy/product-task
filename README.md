# NHC Frontend Task (ongoing)

Simple products app to search dummy json products and show product details.

## Aimed functionalities

- Users can search products and navigate products.
- Integrate with dummyjson api for products data.
- Implement Figma design.
- Real-time filtering of search results
- Handles dynamic content loading
- Shows products statistics

## Framework and Library

- [NextJs](https://nextjs.org/).
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

## Aimed Quality Standards

- Cross-Browser Compatibility (down to IE10).
- Code Modularity and Maintainability.

## Prerequisites

```bash
# Required tools
- Node.js (latest LTS)
- Chrome browser
- Text editor
```

## Installation

- First clone app Ensure any install or build dependencies have installed
- All commands can running within `yarn or npm`

### Running App for local development

- In the project directory, install dependencies

### `npm install`

- In the project directory, you can run

### `npm run dev`

### Running App for build production or deploy app

### `yarn run build`

## Project Structure

```
project-root/
├── src/                      # Source code directory
│   ├��─ app/                  # Next.js App Router structure
│   │   ├── page.tsx          # Home page (product search)
│   │   ├── about/            # About page directory
│   │   │   └── page.tsx      # About page component
│   │   │
│   │   ├── layout.tsx        # Root layout component
│   │   └── globals.css       # Global styles
│   └── components/           # Reusable UI components
│       └── Footer.tsx        # Footer component
├── public/                   # Static assets (images, fonts, etc.)
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```
