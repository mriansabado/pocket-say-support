# PocketSay Support Page

A professional support website for PocketSay, an iOS app that displays large, customizable text for visual communication across distances.

## 🚀 Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Vercel** for deployment

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎨 Features

- Modern, responsive design (mobile-first)
- Smooth animations and transitions
- Hero section with app description
- Features showcase
- How it works section
- Interactive FAQ with accordion
- Contact form
- SEO optimized with meta tags
- Accessible (semantic HTML, ARIA labels)

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository: `mriansabado/pocket-say-support`
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Automatic Deployments

Once connected to Vercel, every push to `main` branch will automatically deploy!

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation bar with smooth scroll
│   ├── Hero.tsx        # Hero section with app introduction
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Step-by-step guide
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links and copyright
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Tailwind CSS imports
```

## 🎯 Customization

### Updating Content

All content is easily customizable in the component files:
- **Hero**: `src/components/Hero.tsx`
- **Features**: `src/components/Features.tsx`
- **FAQ**: `src/components/FAQ.tsx`
- **Contact Email**: `src/components/Contact.tsx`

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- Individual component files - Component-specific styles

## 📝 License

© 2025 Mauna Digital. All rights reserved.
