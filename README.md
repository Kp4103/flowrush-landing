# Flowrush Technologies Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, and Tailwind CSS. Features beautiful animations with Framer Motion and follows the exact content structure from the provided document.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive and mobile-optimized
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Built with Next.js performance best practices
- **SEO Ready**: Optimized meta tags and structured data
- **Accessibility**: WCAG compliant components
- **Clean Code**: Well-structured, maintainable codebase

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, Prettier

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flowrush-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure & Content Sections

```
flowrush-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page (orchestrates all sections)
├── components/            # React components (exact document structure)
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Section 1: Hero with Why Choose Flowrush
│   ├── ServicesSlider.tsx # Section 2: Services slider
│   ├── WhiteLabel.tsx    # Section 3: White-Label Development
│   ├── Process.tsx       # Section 4: 5-Step Process
│   ├── TeamExtension.tsx # Section 5: Team Extension CTA
│   ├── TrustReasons.tsx  # Section 6: Why Agencies Trust Flowrush
│   ├── FAQ.tsx           # Section 7: FAQ
│   ├── GlobalConnectivity.tsx # Section 8: Contact Form
│   └── Footer.tsx        # Footer
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
└── Configuration files...
```

## 📋 Content Sections (As Per Document)

### Section 1: Hero Section
- **Headline**: "Global Experts in Web, Software & App Development"
- **Subheadline**: Scalable, Secure, Future-Ready messaging
- **CTA Buttons**: "Get a Free Consultation" & "Explore Our Work"
- **Short Description**: Trusted global partner messaging
- **Why Choose Flowrush**: 5 key differentiators with icons

### Section 2: Services Slider
- Website Design
- Website Development  
- App Development
- Software Development

### Section 3: White-Label Development
- **Heading**: "White-Label Development You Can Rely On"
- **Stats**: 5000 projects, 300+ clients, 8+ years
- **CTA**: "About Flowrush Technologies" button

### Section 4: 5-Step Process
1. Discovery & Alignment
2. Tailored Planning
3. Rapid Prototyping
4. Agile Development & QA
5. On-Time Delivery & Ongoing Support

### Section 5: Team Extension CTA
- "Think of us as an extension of your team" messaging
- "Get Started" button

### Section 6: Why Agencies Trust Flowrush
- Strict Confidentiality & White-Label Delivery
- Scalable On-Demand Teams
- Reliable, On-Time Delivery
- Custom-Built Solutions
- Transparent Communication
- Post-Launch Support & Maintenance

### Section 7: FAQ
- 9 comprehensive questions covering services, process, and policies

### Section 8: Global Connectivity & Contact
- **Heading**: "24/7 Global Connectivity That Works Around You"
- **Contact Form**: Full name, email, company, city, country, WhatsApp, message
- **CTA**: "Connect Now" button

## 🎨 Customization

### Colors
Primary blue color scheme defined in `tailwind.config.js`:
```javascript
primary: {
  50: '#eff6ff',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
}
```

### Content
All content matches the provided document exactly and can be updated in the respective component files.

### Animations
Smooth scroll animations and hover effects using Framer Motion throughout all sections.

## 📱 Responsive Design

Fully responsive across all device sizes:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Compatible with any Next.js hosting platform:
- Netlify
- AWS
- DigitalOcean
- Railway

## 📊 Performance

Optimized for performance with:
- Next.js 15 App Router
- Optimized images and fonts
- Efficient animations
- Minimal JavaScript bundle
- SEO-ready structure

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please contact:
- Email: hello@flowrush.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Flowrush Technologies

**Note**: This landing page follows the exact content structure and copy from the provided Flowrush Technologies document, ensuring brand consistency and messaging accuracy.
