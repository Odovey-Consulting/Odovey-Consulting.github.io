import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Odovey Consulting. Learn how we handle your information when you use our website and contact form.',
  alternates: {
    canonical: '/privacy/',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy
              <span className="text-primary-600 block">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How we handle your information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <p className="text-sm text-gray-500 mb-8">Effective Date: February 7, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Who We Are</h2>
              <p className="text-gray-600">
                Odovey Consulting is a trade name of Chasing Cloud Careers LLC, a professional services company specializing in AI and cloud consulting. Our website is <strong>odovey.com</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What We Collect</h2>
              <p className="text-gray-600 mb-3">
                We collect minimal information, limited to what you voluntarily provide through our contact form powered by Typeform:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Company name (if provided)</li>
                <li>Message content describing your inquiry</li>
              </ul>
              <p className="text-gray-600 mt-3">
                We do not use cookies, analytics trackers, or any other tracking technologies on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <p className="text-gray-600 mb-3">
                Information submitted through our contact form is used solely to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Respond to your inquiry</li>
                <li>Discuss potential engagement opportunities</li>
                <li>Provide information about our services</li>
              </ul>
              <p className="text-gray-600 mt-3">
                We do not use your information for marketing, advertising, or any purpose unrelated to your inquiry.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
              <p className="text-gray-600 mb-3">
                Our website uses the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li><strong>Typeform</strong> — powers our contact form. Information you submit is processed through Typeform&apos;s platform. See <a href="https://www.typeform.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Typeform&apos;s Privacy Policy</a>.</li>
                <li><strong>GitHub Pages</strong> — hosts this website. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">GitHub&apos;s Privacy Statement</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sharing</h2>
              <p className="text-gray-600">
                We do not sell, rent, or share your personal information with any third parties. Your information is only used to respond to your inquiry and is not disclosed to anyone outside of Odovey Consulting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Retention</h2>
              <p className="text-gray-600">
                We retain contact form submissions only as long as necessary to respond to your inquiry and for reasonable follow-up. If an engagement does not result, your information is deleted within 90 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights</h2>
              <p className="text-gray-600 mb-3">
                You may request at any time to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Know what information we hold about you</li>
                <li>Have your information corrected or deleted</li>
                <li>Withdraw any prior consent</li>
              </ul>
              <p className="text-gray-600 mt-3">
                To exercise any of these rights, email us at <a href="mailto:sales@odovey.com" className="text-primary-600 hover:text-primary-700 underline">sales@odovey.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy, contact us at <a href="mailto:sales@odovey.com" className="text-primary-600 hover:text-primary-700 underline">sales@odovey.com</a> or through our <Link href="/contact" className="text-primary-600 hover:text-primary-700 underline">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
