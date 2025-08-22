# 🎓 iCreative Learning - Educational Website

Modern, responsive website for iCreative Learning - empowering elementary students through creative, fun, and effective learning programs.

## ✨ Features

- **Responsive Design** - Perfect on all devices
- **Modern UI/UX** - Beautiful, professional design with animations
- **React + TypeScript** - Modern tech stack
- **Tailwind CSS** - Utility-first styling
- **React Router** - Smooth navigation
- **SEO Optimized** - Meta tags and PWA support
- **Form Integration** - Contact and registration forms
- **WooCommerce Ready** - Payment integration support

## 🏗️ Project Structure

```
├── client/               # React application
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   └── App.tsx          # Main application
├── server/              # Backend API (optional)
├── public/              # Static assets
├── dist/spa/            # Production build (client-only)
└── deployment-package/  # Ready for hosting
```

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build:client
```

Files will be in `dist/spa/` directory.

## 📦 Deployment

### 🌐 Netlify (Recommended)

1. **Push to GitHub** (click Push button in Builder.io)
2. **Connect GitHub to Netlify**
3. **Build settings**:
   - Build command: `npm run build:client`
   - Publish directory: `dist/spa`
4. **Deploy!**

**📚 See `NETLIFY_DEPLOYMENT_GUIDE.md` for detailed steps**

### 🔧 WordPress Hosting

Upload contents of `deployment-package/` to your hosting.

**📚 See `WORDPRESS_DEPLOYMENT_GUIDE.md` for detailed steps**

## 📋 Pages

- **Home** (`/`) - Hero, programs overview, testimonials
- **Programs** (`/programs`) - Detailed program information
- **About** (`/about`) - About us and team information
- **Registration** (`/register`) - Student registration form
- **Cart** (`/cart`) - Shopping cart for program selection

## 🎨 Customization

### Colors

Update colors in `tailwind.config.ts`:

```javascript
colors: {
  'icreative-purple': '#8B5CF6',
  'icreative-magenta': '#E407FD',
  'icreative-green': '#10B981',
  // ... more colors
}
```

### Content

- **Programs**: Update in `client/pages/Programs.tsx`
- **Testimonials**: Update in `client/components/Testimonials.tsx`
- **Team Info**: Update in `client/pages/About.tsx`

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `vercel.json` - Vercel deployment configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration

## 📱 PWA Support

The site includes PWA manifest (`site.webmanifest`) for:

- Add to home screen functionality
- App-like experience
- Offline support (basic)

## 🔗 Integrations

### WooCommerce

Update placeholder URLs in:

- Header Pay Fees buttons
- Testimonials Pay Fees button

Replace `https://your-woocommerce-site.com/checkout` with your actual URL.

### Email

Contact forms submit to: `info@iCreativeLearning.com`

## 📚 Documentation

- `NETLIFY_DEPLOYMENT_GUIDE.md` - Complete Netlify deployment guide
- `WORDPRESS_DEPLOYMENT_GUIDE.md` - WordPress hosting guide
- `DEPLOYMENT_CHECKLIST.md` - Quick deployment checklist
- `FAVICON_UPDATE_SUMMARY.md` - Favicon implementation details
- `FINAL_DEPLOYMENT_STATUS.md` - Current deployment status

## 🎯 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 📞 Support

For questions about deployment or customization, refer to the documentation files in the project root.

---

**Built with ❤️ for iCreative Learning**
