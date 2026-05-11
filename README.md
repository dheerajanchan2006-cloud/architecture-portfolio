# Architecture Portfolio Website

A premium modern architecture portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Elegant minimal luxury aesthetic
- Dark/Light theme support
- Smooth animations and transitions
- Fully responsive mobile design
- Glassmorphism effects

🏗️ **Sections**
- **Hero** - Fullscreen landing with parallax
- **About** - Professional profile and biography
- **Projects** - Portfolio gallery with filtering
- **Achievements** - Awards timeline
- **Resume** - Experience and skills
- **Contact** - Contact form and social links

⚡ **Performance**
- Optimized images with Next.js Image component
- Lazy loading
- SEO optimized
- Fast page load times

🎨 **Tech Stack**
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript
- React Intersection Observer
- Lucide Icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dheerajanchan2006-cloud/architecture-portfolio.git
cd architecture-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Customization

### Update Your Information

1. **Navbar** (`components/Navbar.tsx`) - Update logo and navigation
2. **About** (`components/sections/About.tsx`) - Add your bio and stats
3. **Projects** (`components/sections/Projects.tsx`) - Add your portfolio projects
4. **Resume** (`components/sections/Resume.tsx`) - Update experience and skills
5. **Contact** (`components/sections/Contact.tsx`) - Add your contact details
6. **Footer** (`components/Footer.tsx`) - Update social links

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ARCHITECT_EMAIL=your@email.com
NEXT_PUBLIC_ARCHITECT_PHONE=+1-XXX-XXX-XXXX
```

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Customize primary color palette
  },
}
```

## Project Structure

```
architecture-portfolio/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── ScrollToTop.tsx      # Scroll to top button
│   ├── ProjectCard.tsx      # Project card component
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Achievements.tsx
│       ├── Resume.tsx
│       └── Contact.tsx
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind config
└── tsconfig.json            # TypeScript config
```

## Features in Detail

### Hero Section
- Fullscreen landing page
- Parallax background image
- Animated text reveal
- Smooth scroll indicator

### Projects Section
- Masonry/grid layout
- Category filtering
- Hover animations
- Project metadata (location, year, area)

### Achievements Section
- Interactive timeline
- Awards, publications, and events
- Animated cards

### Resume Section
- Professional experience
- Skills and software expertise
- CV download button

### Contact Section
- Elegant contact form
- Contact info cards
- WhatsApp button
- Email/Phone links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Image optimization with WebP/AVIF formats
- Lazy loading components
- Code splitting
- CSS minification
- Font optimization

## Deployment

### Deploy on Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy on Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions, please create an issue on GitHub.

## Author

Created by dheerajanchan2006-cloud

---

**Happy Building! 🏗️**
