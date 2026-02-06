# Odovey Consulting Website

A modern, responsive website for Odovey Consulting - a consultancy specializing in cloud and AI professional services.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Runtime**: Node.js 22 LTS

## Features

- 🎨 Modern, responsive design
- ⚡ Optimized performance with Next.js
- 📱 Mobile-first responsive design
- 🔍 SEO optimized
- 🎯 Professional services focus
- 💼 Business-oriented content structure

## Pages

- **Home**: Hero section, services overview, company stats
- **About Us**: Company mission, values, and approach
- **Services**: Detailed cloud and AI service offerings
- **Contact**: Contact form with company information

## Getting Started

### Prerequisites

- Node.js 22 LTS or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mrcloudchase/odovey-consulting-main.git
   cd odovey-consulting-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── app/                    # App Router pages and layouts
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                # Static assets (add your media here)
└── ...config files
```

## Customization

### Adding Media Assets

Place your images, logos, and other media files in the `public/` directory:
- `public/images/` - For images
- `public/logos/` - For company logos
- `public/icons/` - For custom icons

### Updating Content

1. **Company Information**: Update in `components/Header.tsx` and `components/Footer.tsx`
2. **Services**: Modify service arrays in `app/services/page.tsx`
3. **Contact Details**: Update contact information in `app/contact/page.tsx`
4. **About Content**: Edit company details in `app/about/page.tsx`

### Styling

The website uses Tailwind CSS for styling with a custom color palette:
- Primary colors: Blue theme
- Secondary colors: Cyan theme
- Custom components defined in `globals.css`

## Deployment

### Local Testing
```bash
npm run build
npm run start
```

### Production Deployment
The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any hosting platform supporting Node.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Odovey Consulting.

## Support

For technical support or questions about the website, please contact the development team or create an issue in the repository.
