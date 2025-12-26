# PocketSay Support Page

A professional support website for PocketSay, an iOS app that displays large, customizable text for visual communication across distances.

## 🚀 Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Firebase Hosting** for deployment

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

## 🚢 Deployment to Firebase Hosting

### Prerequisites

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project (if not already done):
```bash
firebase init hosting
```

4. Update `.firebaserc` with your Firebase project ID:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### Deploy Steps

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy --only hosting
```

Your site will be live at `https://your-project-id.web.app`

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
