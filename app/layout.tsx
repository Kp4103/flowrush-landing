import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flowrush Technologies - Global Experts in Web, Software & App Development',
  description: 'Scalable. Secure. Future-Ready. Flowrush delivers high-performance digital solutions for startups, enterprises, and global brands across the UK, US, and beyond.',
  keywords: ['web development', 'software development', 'app development', 'white-label development', 'digital solutions', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Flowrush Technologies' }],
  icons: {
    icon: '/flowrush-logo.webp',
    shortcut: '/flowrush-logo.webp',
    apple: '/flowrush-logo.webp',
  },
  openGraph: {
    title: 'Flowrush Technologies - Global Web & Software Development Experts',
    description: 'Transform your digital vision into reality with our expert development team. 5000+ projects delivered, 300+ happy clients worldwide.',
    url: 'https://flowrush.com',
    siteName: 'Flowrush Technologies',
    type: 'website',
    images: [{
      url: '/flowrush-logo.webp',
      width: 1200,
      height: 630,
      alt: 'Flowrush Technologies',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowrush Technologies - Global Development Experts',
    description: 'Professional web, software & app development services with 8+ years of expertise.',
    images: ['/flowrush-logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
