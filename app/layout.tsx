import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Odovey Consulting - Cloud & AI Professional Services',
  description: 'Leading consultancy specializing in cloud and AI services, offering professional services exclusively. Transform your business with our expert cloud and artificial intelligence solutions.',
  keywords: 'cloud services, AI consulting, professional services, cloud migration, artificial intelligence, digital transformation',
  authors: [{ name: 'Odovey Consulting' }],
  openGraph: {
    title: 'Odovey Consulting - Cloud & AI Professional Services',
    description: 'Leading consultancy specializing in cloud and AI services, offering professional services exclusively.',
    url: 'https://odovey.com',
    siteName: 'Odovey Consulting',
    type: 'website',
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
