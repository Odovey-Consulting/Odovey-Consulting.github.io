import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://odovey.com'),
  title: {
    template: '%s | Odovey Consulting',
    default: 'Odovey Consulting - Harness Engineering for Agentic AI',
  },
  description: 'Odovey Consulting is a harness engineering consultancy. Every AI agent is a model inside a harness. We build harnesses, from purpose-built agents to agent platforms, and train engineering teams to build them.',
  keywords: 'harness engineering, agent harness, agentic AI consulting, AI agent development, agent platform engineering, context engineering, agent evaluation, AI corporate training, Model Context Protocol',
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
    title: 'Odovey Consulting - Harness Engineering for Agentic AI',
    description: 'Harness engineering consultancy. We build agentic solutions and agent platforms, enable engineering teams, and train them in harness engineering.',
    url: 'https://odovey.com',
    siteName: 'Odovey Consulting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Odovey Consulting - Harness Engineering for Agentic AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odovey Consulting - Harness Engineering for Agentic AI',
    description: 'Harness engineering consultancy. We build agentic solutions and agent platforms, enable engineering teams, and train them in harness engineering.',
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
