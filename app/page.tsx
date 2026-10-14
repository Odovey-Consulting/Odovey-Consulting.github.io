import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, Bot, Users, GraduationCap, CheckCircle, BookOpen } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { HARNESS_ENGINEERING_REPO, harnessPrimitives, productionQuestions } from '@/lib/harness'

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
          description: 'Harness engineering consultancy. We build agentic solutions and agent platforms, enable engineering teams, and deliver corporate training on harness engineering.',
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
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-4">
              Harness Engineering for Agentic AI
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Model Is the Mind.
              <span className="text-primary-600 block">We Build the Body.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every AI agent is a model inside a harness. The harness decides what the model sees, what it can do, and when it stops. We engineer harnesses and the platforms that run them, and we teach your engineers to do the same.
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

      {/* What is harness engineering */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Is Harness Engineering?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An agent observes, thinks, and acts, then repeats. The model does the thinking. Everything else is the harness, and that is where most agents succeed or fail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Model: the Mind</h3>
              <p className="text-gray-600 mb-4">
                Tokens in, tokens out. A model predicts what comes next, and that&apos;s all. It can&apos;t capture its own inputs, take action, or decide when the work is done.
              </p>
              <p className="text-gray-600">
                Models improve and change constantly. Choose one that fits the work, and plan to swap it later.
              </p>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border-2 border-primary-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Harness: the Body</h3>
              <p className="text-gray-600 mb-6">
                The harness does everything else. Every agent, from a coding assistant to a customer-facing workflow, reduces to the same five primitives. Agents differ in how each one is built.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {harnessPrimitives.map((primitive) => (
                  <div key={primitive.name} className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-gray-900">{primitive.name}</p>
                    <p className="text-sm text-gray-600">{primitive.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build harnesses for you, build them with you, or teach your team to build them. Most clients do all three.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                iconClass: 'bg-primary-100 text-primary-600',
                title: 'Build',
                text: 'We design and deliver agentic solutions, from a single purpose-built agent to a shared agent platform your teams build on.',
                items: ['Purpose-built agent harnesses', 'Agent platform engineering', 'Production readiness reviews'],
                href: '/services#build',
                cta: 'Build services',
              },
              {
                icon: Users,
                iconClass: 'bg-secondary-100 text-secondary-600',
                title: 'Enable',
                text: 'We embed with your engineers and pair on real harness work, so the skills stay with your team after we leave.',
                items: ['Co-build engagements', 'Architecture & harness reviews', 'Internal agent platform teams'],
                href: '/services#enable',
                cta: 'Enablement services',
              },
              {
                icon: GraduationCap,
                iconClass: 'bg-green-100 text-green-600',
                title: 'Train',
                text: 'We run corporate training on harness engineering, from leadership briefings to hands-on bootcamps where engineers build a harness from scratch.',
                items: ['Harness engineering bootcamps', 'Production harness workshops', 'Executive briefings'],
                href: '/training',
                cta: 'Training programs',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${pillar.iconClass}`}>
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.text}</p>
                <ul className="space-y-2 mb-6">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={pillar.href} className="mt-auto text-primary-600 hover:text-primary-700 font-medium">
                  {pillar.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production readiness */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Demo to Production
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A working demo isn&apos;t a production agent. Getting there means asking six questions of every primitive in the harness. We build the answers into everything we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionQuestions.map((item) => (
              <div key={item.concern} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">{item.concern}</p>
                <p className="text-lg font-medium text-gray-900">{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model-agnostic + open curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Your Harness Is the Asset
              </h2>
              <p className="text-gray-600">
                We don&apos;t resell models or platforms. Models will keep changing, but a well-built harness holds your tools, context, guardrails, and evaluations. We design it so you can swap the model without starting over.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  We Teach It in the Open
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our open Harness Engineering curriculum builds an agent one primitive at a time, evaluates it, and gets it ready for production. Read it before you hire us.
              </p>
              <a href={HARNESS_ENGINEERING_REPO} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">
                Read the curriculum on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build the Body Your Agents Need
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us what you want your agents to do. We&apos;ll show you the harness it takes, and the fastest path to running it in production.
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
