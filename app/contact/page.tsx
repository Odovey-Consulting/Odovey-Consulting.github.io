import type { Metadata } from 'next'
import ContactPageContent from '@/components/ContactPageContent'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Odovey Consulting for AI and cloud professional services. We typically respond within 24 hours.',
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
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long does a typical project take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Project timelines vary based on scope and complexity. Cloud migrations typically take 3-6 months, while AI implementations can range from 2-8 months.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you work with small businesses?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, we work with organizations of all sizes. Our solutions are scalable and can be tailored to fit any budget or requirement.',
              },
            },
            {
              '@type': 'Question',
              name: 'What cloud platforms do you support?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid/multi-cloud environments.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you provide ongoing support?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. We offer comprehensive support packages including monitoring, maintenance, optimization, and strategic consulting.',
              },
            },
          ],
        }}
      />
      <ContactPageContent />
    </>
  )
}
