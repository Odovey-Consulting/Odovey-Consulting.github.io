import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://odovey.com'),
  title: {
    template: '%s | Odovey Consulting',
    default: 'Odovey Consulting - Forward Deployed Engineers for Agentic AI',
  },
  description: 'Odovey Consulting is a professional services firm of forward deployed engineers. We build and deploy agentic AI solutions and platforms for organizations, enable their teams, and deliver corporate training.',
  keywords: 'forward deployed engineers, agentic AI consulting, agentic AI professional services, AI agent development, agentic platform, agentic workflows, AI gateway, harness engineering, AI corporate training',
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
    title: 'Odovey Consulting - Forward Deployed Engineers for Agentic AI',
    description: 'Forward deployed engineers who build and deploy agentic AI solutions and platforms, enable your teams, and deliver corporate training.',
    url: 'https://odovey.com',
    siteName: 'Odovey Consulting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Odovey Consulting - Forward Deployed Engineers for Agentic AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odovey Consulting - Forward Deployed Engineers for Agentic AI',
    description: 'Forward deployed engineers who build and deploy agentic AI solutions and platforms, enable your teams, and deliver corporate training.',
    images: ['/images/og-default.png'],
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
