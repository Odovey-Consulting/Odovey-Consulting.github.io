import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  BookOpen,
  Briefcase,
  Code,
  Layers,
  ShieldCheck,
  Presentation,
  MapPin,
  Video,
  Wrench,
  ArrowRight
} from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { HARNESS_ENGINEERING_REPO } from '@/lib/harness'

const description = 'Corporate training in harness engineering: hands-on bootcamps where engineers build an AI agent harness from scratch, production and platform workshops, agent evaluation, and executive briefings. Delivered on-site or virtually.'

export const metadata: Metadata = {
  title: 'Harness Engineering Training',
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
      icon: Code,
      title: 'Harness Engineering Bootcamp',
      audience: 'Software engineers',
      format: '2–3 day hands-on bootcamp',
      description: 'Engineers build an agent harness from scratch, one primitive at a time: reach the model, take input, act through tools, loop, and give it context.',
      outcomes: ['Understand what an agent is made of', 'Build all five harness primitives', 'Evaluate a harness against a task suite', 'Leave with a working agent'],
    },
    {
      icon: ShieldCheck,
      title: 'Production Harness Engineering',
      audience: 'Senior engineers, platform & SRE teams',
      format: '2-day workshop',
      description: 'Take a working harness to production by asking six questions of every primitive: persistence, security, observability, resilience, performance, and evaluation.',
      outcomes: ['Sandbox agent actions', 'Add memory that outlasts a session', 'Trace and audit what agents did', 'Control latency and cost'],
    },
    {
      icon: Layers,
      title: 'Agent Platform Engineering',
      audience: 'Platform & architecture teams',
      format: '1–2 day workshop',
      description: 'Turn one harness into a shared platform: reusable components, model routing, execution environments, and a developer experience other teams want to use.',
      outcomes: ['Reference platform architecture', 'Reusable harness components', 'Model-agnostic interfaces', 'Self-service patterns for teams'],
    },
    {
      icon: Activity,
      title: 'Evaluating Agents',
      audience: 'Engineers & QA teams',
      format: '1-day workshop',
      description: 'Judge agents by what they did, not what they said. Build task suites with known right answers and use them to compare models and catch regressions.',
      outcomes: ['Design task suites & graders', 'Run evals in isolated environments', 'Compare models & harness versions', 'Gate releases on results'],
    },
    {
      icon: Briefcase,
      title: 'What Agents Are Made Of',
      audience: 'Executives, product & business leaders',
      format: 'Half-day briefing',
      description: 'A plain-language, hype-free explanation of agents as a model plus a harness, and what that means for strategy, risk, cost, and team structure.',
      outcomes: ['Separate the model from the harness', 'Spot where agents fit, and where they don\'t', 'Understand production risk & cost', 'Know what to ask your teams'],
    },
    {
      icon: Presentation,
      title: 'Custom Programs',
      audience: 'Any team',
      format: 'Tailored to you',
      description: 'A program built around your use cases, models, and policies, from a single lunch-and-learn to a multi-week cohort that ends with your own production agent.',
      outcomes: ['Exercises using your scenarios', 'Aligned to your approved models & tools', 'Cohort-based learning paths', 'Follow-up office hours'],
    },
  ]

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Harness Engineering Training Programs',
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
              Harness Engineering
              <span className="text-primary-600 block">Training</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your engineers learn what an agent is made of by building one. They start from a bare model and add one primitive at a time until they have an agent that is evaluated and ready for production.
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
              Programs for engineers who build agents and for leaders who decide where agents belong. Each one can be tailored to your stack and use cases.
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

      {/* Open curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-8 w-8 text-primary-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Built on an Open Curriculum</h2>
              <p className="text-gray-600">
                Our training is based on Harness Engineering, a free, open curriculum that builds an agent primitive by primitive, evaluates it, and gets it ready for production. Corporate programs add instructor-led labs, your own use cases, and time with practitioners.
              </p>
            </div>
            <a href={HARNESS_ENGINEERING_REPO} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-shrink-0">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="section-padding">
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
            Teach Your Team Harness Engineering
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
