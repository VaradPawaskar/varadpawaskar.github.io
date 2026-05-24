
# React Portfolio - Setup & Deployment Guide

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   ├── index.css
│   └── Varad_photo.jpg
├── package.json
├── vite.config.js
└── public/
    └── index.html
```

## Quick Start (5 minutes)

### Step 1: Create a new React project
```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

### Step 2: Copy all files
- Replace the contents of `src/` with the component files
- Copy your `Varad_photo.jpg` into `src/`
- Replace `src/App.jsx` with the provided App.jsx
- Replace `src/App.css` with the provided App.css
- Create `src/components/` folder and add all component files

### Step 3: Update index.jsx
Make sure your `src/index.jsx` looks like:
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Step 4: Update package.json (for GitHub Pages)
Add this to your `package.json`:
```json
{
  "homepage": "https://username.github.io",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

### Step 5: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 6: Run locally
```bash
npm run dev
```
Visit http://localhost:5173 to see your portfolio

---

## Deploy to GitHub Pages

### Option A: Using gh-pages (Easiest)

1. **Create GitHub repo**: `username.github.io` (make it public)

2. **Initialize git**:
```bash
git init
git add .
git commit -m "Initial React portfolio"
git remote add origin https://github.com/username/username.github.io.git
git branch -M main
git push -u origin main
```

3. **Deploy**:
```bash
npm run deploy
```

That's it! Your site is live at `https://username.github.io`

### Option B: Using Vite + GitHub Actions

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to GitHub and it auto-deploys!

---

## Key Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile
✅ **Component-Based** - Easy to update and maintain
✅ **Smooth Animations** - Fade-in effects on scroll
✅ **Production Ready** - Optimized and minified build
✅ **One Command Deploy** - `npm run deploy`

---

## Customization

### Change your photo
Replace `Varad_photo.jpg` with your image in the `src/` folder

### Update content
Edit the data in each component (Skills.jsx, Projects.jsx, etc.)

### Change colors
Edit the CSS variables in `App.css`:
```css
:root {
  --navy: #16284d;
  --accent: #c07d35;
  /* ... etc */
}
```

### Add new projects
Edit `Projects.jsx` and add to the `projects` array

---

## Troubleshooting

**Build fails?**
```bash
npm install
npm run build
```

**Photo not showing?**
- Make sure `Varad_photo.jpg` is in `src/`
- Check the filename matches exactly

**Site not deploying?**
```bash
npm run deploy
# Wait 1-2 minutes for GitHub to build
```

---

## Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool (fast!)
- **CSS3** - Responsive design
- **gh-pages** - GitHub Pages deployment

---

Good luck! 🚀

