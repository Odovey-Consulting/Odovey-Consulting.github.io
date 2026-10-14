import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://odovey.com'),
  title: {
    template: '%s | Odovey Consulting',
    default: 'Odovey Consulting - Agentic AI Consulting & Training',
  },
  description: 'Odovey Consulting is an agentic AI consultancy. We help organizations design and build AI agents and agent platforms, upskill their teams, and deliver corporate training on agentic AI.',
  keywords: 'agentic AI consulting, AI agents, AI agent development, multi-agent systems, agent platform, AI corporate training, AI upskilling, Model Context Protocol, AI governance',
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
    title: 'Odovey Consulting - Agentic AI Consulting & Training',
    description: 'Agentic AI consultancy. We build AI agents and agent platforms, enable your engineering teams, and deliver corporate training on agentic AI.',
    url: 'https://odovey.com',
    siteName: 'Odovey Consulting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Odovey Consulting - Agentic AI Consulting & Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odovey Consulting - Agentic AI Consulting & Training',
    description: 'Agentic AI consultancy. We build AI agents and agent platforms, enable your engineering teams, and deliver corporate training on agentic AI.',
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
