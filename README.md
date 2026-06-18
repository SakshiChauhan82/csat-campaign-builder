# CSAT Campaign Builder

A real-time CSAT (Customer Satisfaction) popup builder. Configure content and styling, and see your changes reflected instantly in a live mobile preview — no save button or page refresh required.

## Live Demo
To deploy every commit automatically,
connect a Git Repository (vercel.link/git (https://vercel.link/git)).

## Features

- Content tab — Configure all three screens: Initial feedback, Feedback page, Thank You page
- Styling tab — Customize colors, font size, font weight, border radius, button dimensions
- Live mobile preview — Every change reflects instantly in a phone frame preview
- Dynamic options — Add or delete feedback options on the fly
- Rating types — Switch between star rating and 1–5 number rating
- Media upload — Upload PNG, JPG, GIF for the Thank You screen
- Responsive — Works on desktop and mobile browsers

## Tech Stack

- React 18
- Vite 5
- Plain CSS (component-scoped)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
csat-campaign-builder/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component, shared state
    ├── App.css
    ├── index.css             # Global reset & base styles
    └── components/
        ├── ContentPanel.jsx  # Content tab (titles, options, upload)
        ├── ContentPanel.css
        ├── StylingPanel.jsx  # Styling tab (colors, typography, shape)
        ├── StylingPanel.css
        ├── MobilePreview.jsx # Live phone frame preview
        └── MobilePreview.css
```

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # set public dir to "dist"
npm run build
firebase deploy
```
