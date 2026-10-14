import type { Metadata } from 'next'
import ContactPageContent from '@/components/ContactPageContent'
import { JsonLd } from '@/components/JsonLd'
import { contactFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with O'Dovey AI about building and deploying agentic AI solutions and platforms, team enablement, or corporate training. We typically respond within 24 hours.",
  alternates: {
    canonical: '/contact/',
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: contactFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />
      <ContactPageContent />
    </>
  )
}
