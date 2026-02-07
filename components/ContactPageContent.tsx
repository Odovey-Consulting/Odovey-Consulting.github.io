'use client'

import { useEffect } from 'react'
import { Mail, MapPin } from 'lucide-react'

export default function ContactPageContent() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = 'https://embed.typeform.com/next/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In
              <span className="text-primary-600 block">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and cloud solutions? Let&apos;s start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Typeform Embed */}
            <div className="bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <div
                data-tf-live="01K3A76JGXSGRESXZCSKR44Z2S"
                style={{ minHeight: '600px', width: '100%' }}
              ></div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">sales@odovey.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">Houston, Texas, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600 text-sm">
                Project timelines vary based on scope and complexity. Cloud migrations typically take 3-6 months, while AI implementations can range from 2-8 months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Do you work with small businesses?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we work with organizations of all sizes. Our solutions are scalable and can be tailored to fit any budget or requirement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What cloud platforms do you support?</h3>
              <p className="text-gray-600 text-sm">
                We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid/multi-cloud environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What is your engagement model?</h3>
              <p className="text-gray-600 text-sm">
                We offer project-based engagements tailored to your specific needs. Each engagement includes a defined scope, timeline, and deliverables agreed upon before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
