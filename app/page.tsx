import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  Users,
  GraduationCap,
  CheckCircle,
  BookOpen,
  Layers,
  Workflow,
  Wrench,
  Plug,
  Compass,
  Rocket,
  Handshake,
} from 'lucide-react'
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
          description: 'Professional services firm of forward deployed engineers who build and deploy agentic AI solutions and platforms for organizations, enable their teams, and deliver corporate training.',
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
              Forward Deployed Engineers for Agentic AI
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We Build and Deploy
              <span className="text-primary-600 block">Agentic Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Odovey Consulting is a professional services firm of forward deployed engineers. We embed with your team, build the agents and platforms your organization needs, deploy them into your environment, and make sure your people can run them.
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

      {/* What we build */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Build and Deploy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every engagement is different. We work across the whole stack, from the infrastructure that agents run on to the agents themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Layers,
                title: 'Agentic Platforms',
                text: 'The shared foundation for building and running agents across your organization, including model access, routing, policy, observability, and the developer experience on top.',
              },
              {
                icon: Workflow,
                title: 'Agents & Agentic Workflows',
                text: 'Agents that do real work inside your business processes, from structured, workflow-driven automation to more autonomous agents, with humans in the loop where it matters.',
              },
              {
                icon: Wrench,
                title: 'Custom Agent Harnesses',
                text: 'Internal agents and tools that your organization owns and controls, built around your systems, security requirements, and the way your teams work.',
              },
              {
                icon: Plug,
                title: 'Integrations & Infrastructure',
                text: 'Connecting agents to your data, APIs, and systems of record, and deploying everything securely into your cloud or on-premises environment.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forward deployed model */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Forward Deployed, Not Hands-Off
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t hand you a slide deck and leave. Our engineers work inside your environment, alongside your team, until the solution is running in production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: 'Embedded With Your Team',
                text: 'We join your stand-ups, work in your repositories and cloud accounts, and learn your systems and constraints firsthand.',
              },
              {
                icon: Rocket,
                title: 'Shipped to Production',
                text: 'Success means agents running in your environment and doing real work, not a proof of concept that stalls after the demo.',
              },
              {
                icon: Handshake,
                title: 'Handed Over for Good',
                text: 'Code, runbooks, and know-how stay with your team. We pair as we build so you can run and extend what we delivered.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build for you, build with you, or train your team to build on its own. Most clients do all three.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                iconClass: 'bg-primary-100 text-primary-600',
                title: 'Build & Deploy',
                text: 'Forward deployed engineers design, build, and deploy agentic solutions and platforms in your environment.',
                items: ['Agentic platforms', 'Agents & agentic workflows', 'Custom agent harnesses'],
                href: '/services#build',
                cta: 'Build & deploy services',
              },
              {
                icon: Users,
                iconClass: 'bg-secondary-100 text-secondary-600',
                title: 'Enable',
                text: 'We pair with your engineers on real work, so the skills stay with your team after we leave.',
                items: ['Co-build engagements', 'Architecture reviews & advisory', 'Internal platform team setup'],
                href: '/services#enable',
                cta: 'Enablement services',
              },
              {
                icon: GraduationCap,
                iconClass: 'bg-green-100 text-green-600',
                title: 'Train',
                text: 'We run corporate training on building agents, from leadership briefings to hands-on engineering bootcamps.',
                items: ['Hands-on engineering bootcamps', 'Production & platform workshops', 'Executive briefings'],
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
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Demo to Production
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A working demo isn&apos;t a production system. Everything we deploy has answers to six questions.
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

      {/* Vendor-neutral + harness engineering */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vendor-Neutral by Default
              </h2>
              <p className="text-gray-600">
                We don&apos;t resell models or platforms. We help you choose the models, tools, and infrastructure that fit your requirements, and we build so you can change them later without starting over.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Grounded in Harness Engineering
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Every agent is a model inside a harness, the body that turns predictions into action. We teach how to build one in the open, one primitive at a time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {harnessPrimitives.map((primitive) => (
                  <span key={primitive.name} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 text-primary-700">
                    {primitive.name}
                  </span>
                ))}
              </div>
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
            Put Forward Deployed Engineers on Your AI Roadmap
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us what you&apos;re trying to build. We&apos;ll suggest the fastest path to getting it into production.
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
