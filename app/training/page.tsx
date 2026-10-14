import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Briefcase,
  Code,
  Users,
  Layers,
  ShieldCheck,
  Presentation,
  MapPin,
  Video,
  Wrench,
  ArrowRight
} from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'

const description = 'Corporate training on agentic AI: executive briefings, hands-on developer bootcamps, platform and security workshops, and AI agent training for business teams. Delivered on-site or virtually and tailored to your organization.'

export const metadata: Metadata = {
  title: 'Agentic AI Corporate Training',
  description,
  alternates: {
    canonical: '/training/',
  },
}

type Program = {
  icon: typeof Briefcase
  title: string
  audience: string
  format: string
  description: string
  outcomes: string[]
}

export default function Training() {
  const programs: Program[] = [
    {
      icon: Briefcase,
      title: 'Agentic AI for Leaders',
      audience: 'Executives & senior leaders',
      format: 'Half-day briefing',
      description: 'A clear, hype-free view of what AI agents can and cannot do today, and how to lead an organization through adopting them.',
      outcomes: ['Understand agent capabilities & limits', 'Spot high-value opportunities', 'Weigh risk, cost & governance', 'Leave with next steps for your org'],
    },
    {
      icon: Code,
      title: 'Building AI Agents',
      audience: 'Software engineers',
      format: '2–3 day hands-on bootcamp',
      description: 'Engineers build working agents end-to-end: tool use, planning, memory, retrieval, multi-agent patterns, and evaluation.',
      outcomes: ['Design agent architectures', 'Integrate tools via MCP & APIs', 'Write evaluations that catch regressions', 'Ship an agent to a real environment'],
    },
    {
      icon: Layers,
      title: 'Agent Platform Engineering',
      audience: 'Platform, DevOps & SRE teams',
      format: '2-day workshop',
      description: 'How to run agents at scale: model gateways, runtimes, observability, cost controls, and the developer experience on top.',
      outcomes: ['Reference platform architecture', 'Tracing & monitoring for agents', 'Cost & capacity management', 'Self-service patterns for teams'],
    },
    {
      icon: ShieldCheck,
      title: 'Securing AI Agents',
      audience: 'Security & risk teams',
      format: '1-day workshop',
      description: 'The agent threat landscape and the controls that address it, from prompt injection to over-privileged tools.',
      outcomes: ['Threat-model an agent system', 'Apply least-privilege tool access', 'Design guardrails & approvals', 'Plan red-team exercises'],
    },
    {
      icon: Users,
      title: 'Working with AI Agents',
      audience: 'Business & operations teams',
      format: 'Half-day or full-day workshop',
      description: 'Non-technical staff learn to work effectively alongside agents and to identify and shape automation opportunities in their own work.',
      outcomes: ['Use agents productively & safely', 'Map workflows for automation', 'Write effective instructions', 'Know when a human should decide'],
    },
    {
      icon: Presentation,
      title: 'Custom Programs',
      audience: 'Any team',
      format: 'Tailored to you',
      description: 'A program built around your use cases, tech stack, and policies, from a single lunch-and-learn to a multi-week curriculum.',
      outcomes: ['Exercises using your scenarios', 'Aligned to your approved tools', 'Cohort-based learning paths', 'Follow-up office hours'],
    },
  ]

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Agentic AI Corporate Training Programs',
          description,
          itemListElement: programs.map((p, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Course',
              name: p.title,
              description: p.description,
              provider: {
                '@type': 'Organization',
                name: 'Odovey Consulting',
                url: 'https://odovey.com',
              },
            },
          })),
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Agentic AI
              <span className="text-primary-600 block">Corporate Training</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Practical training taught by practitioners who build agents for a living. Your people learn by doing, using scenarios drawn from your business.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Plan a Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A program for every role involved in adopting agents. Each one can be tailored to your stack and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 text-primary-700">{program.audience}</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">{program.format}</span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mt-auto">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 flex-shrink-0"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Site</h3>
              <p className="text-gray-600">
                In-person sessions at your offices, the best fit for bootcamps and leadership offsites.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Virtual</h3>
              <p className="text-gray-600">
                Instructor-led online sessions for distributed teams, split into shorter blocks to fit schedules.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training + Build</h3>
              <p className="text-gray-600">
                Pair a bootcamp with a co-build engagement so your team applies what they learned to a real project right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upskill Your Team on Agentic AI
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us who you want to train and what they need to be able to do. We&apos;ll recommend a program and format.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Plan a Training
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
