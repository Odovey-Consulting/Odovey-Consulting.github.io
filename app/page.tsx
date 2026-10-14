import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Layers, GraduationCap, ShieldCheck, Gauge, Users, CheckCircle } from 'lucide-react'
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
          description: 'Agentic AI consultancy that helps organizations build AI agents and agent platforms, upskill their teams, and deliver corporate training on agentic AI.',
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
              Put AI Agents to Work
              <span className="text-primary-600 block">In Your Organization</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Odovey Consulting is an agentic AI consultancy. We design and build production-ready AI agents and agent platforms, and we teach your people to build, run, and govern them on their own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Ways We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engage us to build, to upskill your team while we build together, or to train your workforce. Most clients combine all three.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Build</h3>
              <p className="text-gray-600 mb-4">
                We design and deliver agentic solutions, from a single high-value agent to an enterprise agent platform that your teams can build on.
              </p>
              <ul className="space-y-2 mb-6">
                {['Custom AI agents & multi-agent workflows', 'Agent platform engineering', 'Tool & system integrations'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="mt-auto text-primary-600 hover:text-primary-700 font-medium">
                Build services →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enable</h3>
              <p className="text-gray-600 mb-4">
                We embed with your engineers, pairing on real work so the capability stays with your team after we leave.
              </p>
              <ul className="space-y-2 mb-6">
                {['Co-build engagements', 'Technical coaching & architecture reviews', 'AI center of excellence setup'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="mt-auto text-primary-600 hover:text-primary-700 font-medium">
                Enablement services →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Train</h3>
              <p className="text-gray-600 mb-4">
                We run corporate training on agentic AI for every audience, from executive briefings to hands-on engineering bootcamps.
              </p>
              <ul className="space-y-2 mb-6">
                {['Executive & leadership briefings', 'Hands-on developer bootcamps', 'Workshops for business teams'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/training" className="mt-auto text-primary-600 hover:text-primary-700 font-medium">
                Training programs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agents That Make It to Production
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Demos are easy. Reliable, secure, cost-controlled agents running against real systems are not. That is where we focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Platform Thinking</h3>
              <p className="text-gray-600">
                We build shared foundations, including model access, tool connectivity, and memory, so your second agent costs a fraction of your first.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure by Design</h3>
              <p className="text-gray-600">
                Least-privilege tool access, human-in-the-loop approvals, guardrails, and audit trails are part of the architecture from day one.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Measured, Not Guessed</h3>
              <p className="text-gray-600">
                Evaluation suites, tracing, and cost monitoring show you whether your agents are actually working and what they cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor-neutral */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vendor-Neutral by Default
            </h2>
            <p className="text-xl text-gray-600">
              We don&apos;t resell models or platforms. We help you choose the right models, frameworks, and infrastructure for your constraints, and we design so you can change them later without starting over.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your First Agent, or Your Next Ten?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us where you are. We&apos;ll suggest the fastest path to agents your organization trusts and can run.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
