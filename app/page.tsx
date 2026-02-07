import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Cloud, Zap, Shield, CheckCircle } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Odovey Consulting',
          url: 'https://odovey.com',
          logo: 'https://odovey.com/images/logo.png',
          description: 'Leading consultancy specializing in AI and cloud services, offering professional services exclusively.',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'sales@odovey.com',
            contactType: 'sales',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Houston',
            addressRegion: 'TX',
            addressCountry: 'US',
          },
          sameAs: ['https://www.linkedin.com/company/odovey-consulting'],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Odovey Consulting',
          url: 'https://odovey.com',
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-primary-600 block">AI & Cloud Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading consultancy specializing in AI and cloud services. We help businesses scale, innovate, and succeed with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Odovey Consulting?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine deep technical expertise with strategic business insight to deliver transformative results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Innovation</h3>
              <p className="text-gray-600">
                Strategic AI implementation and consulting to unlock new possibilities and competitive advantages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Expertise</h3>
              <p className="text-gray-600">
                Comprehensive cloud migration, architecture, and optimization services across all major cloud platforms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance built into every solution we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">AI Model Infrastructure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">AI Agent Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Supervised Fine-Tuning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">RAG Implementation</span>
                </li>
              </ul>
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Cloud Migration & Modernization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Multi-Cloud Architecture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">DevOps & Automation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Performance & Cost Optimization</span>
                </li>
              </ul>
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI and cloud expertise can drive your business forward.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
