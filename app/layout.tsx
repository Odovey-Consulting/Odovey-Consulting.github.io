import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://odovey.com'),
  title: {
    template: '%s | Odovey Consulting',
    default: 'Odovey Consulting - AI & Cloud Professional Services',
  },
  description: 'Leading consultancy specializing in AI and cloud services, offering professional services exclusively. Transform your business with our expert cloud and artificial intelligence solutions.',
  keywords: 'AI consulting, artificial intelligence, cloud services, professional services, cloud migration, digital transformation',
  authors: [{ name: 'Odovey Consulting' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Odovey Consulting - AI & Cloud Professional Services',
    description: 'Leading consultancy specializing in AI and cloud services, offering professional services exclusively.',
    url: 'https://odovey.com',
    siteName: 'Odovey Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Odovey Consulting - AI & Cloud Professional Services',
    description: 'Leading consultancy specializing in AI and cloud services, offering professional services exclusively.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
