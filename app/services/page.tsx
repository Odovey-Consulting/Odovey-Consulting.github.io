import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Compass,
  FileText,
  ClipboardCheck,
  Scale,
  Bot,
  Layers,
  Plug,
  ShieldCheck,
  Activity,
  Users,
  MessageSquare,
  Building2,
  GraduationCap,
  ArrowRight
} from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'

const description = 'Harness engineering services for agentic AI: agent strategy, harness assessments, purpose-built agent harnesses, agent platform engineering, context engineering, tools and integrations, production hardening, evaluation, and team enablement.'

export const metadata: Metadata = {
  title: 'Harness Engineering & Agentic AI Services',
  description,
  alternates: {
    canonical: '/services/',
  },
}

type Service = {
  icon: typeof Bot
  title: string
  description: string
  features: string[]
}

export default function Services() {
  const advisoryServices: Service[] = [
    {
      icon: Compass,
      title: "Agent Strategy & Use-Case Design",
      description: "Start from what you want the agent to do. We define the work, pick models suited to it, and shape the harness around them.",
      features: ["Use-case discovery & prioritization", "Model research & selection", "Harness architecture design", "Build vs. buy analysis"]
    },
    {
      icon: ClipboardCheck,
      title: "Harness Assessment",
      description: "Already have agents? We review your harness against the five primitives and the six production questions, and tell you what will break first.",
      features: ["Primitive-by-primitive review", "Production readiness scorecard", "Risk & cost findings", "Prioritized remediation plan"]
    },
    {
      icon: Scale,
      title: "Agent Governance & Operating Model",
      description: "Decide what agents may do on their own, what needs a human, and who owns them, so adoption can scale without losing control.",
      features: ["Autonomy & approval policies", "Ownership & support model", "Responsible AI guidelines", "Compliance mapping"]
    }
  ]

  const buildServices: Service[] = [
    {
      icon: Bot,
      title: "Purpose-Built Agent Harnesses",
      description: "We engineer the body around the model, covering input, context, model interface, output, and control flow, for agents that do real work in your systems.",
      features: ["Single & multi-agent designs", "Human-in-the-loop control flow", "Long-running & background agents", "Model-agnostic interfaces"]
    },
    {
      icon: Layers,
      title: "Agent Platform Engineering",
      description: "A shared harness foundation, so every team builds agents the same way and the tenth agent is far cheaper than the first.",
      features: ["Model gateway & routing", "Reusable harness components", "Sandboxed execution environments", "Self-service developer experience"]
    },
    {
      icon: FileText,
      title: "Context Engineering",
      description: "What the model is shown determines what it does. We design instructions, memory, and retrieval so agents know what they are and stay effective on long tasks.",
      features: ["System instructions & agent specs", "Persistent memory design", "Retrieval & knowledge access", "Context window management"]
    },
    {
      icon: Plug,
      title: "Tools & Integrations",
      description: "Give agents a way to act, through tools that are well-scoped, well-described, and safe to call against real systems.",
      features: ["Tool design & interfaces", "Model Context Protocol (MCP) servers", "API & data connectors", "Legacy system integration"]
    },
    {
      icon: ShieldCheck,
      title: "Production Hardening",
      description: "We answer the six production questions for every primitive: persistence, security, observability, resilience, performance, and evaluation.",
      features: ["Sandboxing & least privilege", "Tracing & audit trails", "Timeouts, retries & recovery", "Caching & cost control"]
    },
    {
      icon: Activity,
      title: "Agent Evaluation",
      description: "Evaluate by what the agent actually did, not what it says. Task suites with known right answers show you whether a change made things better or worse.",
      features: ["Task suites & graders", "Outcome-based checks", "Regression gates in CI", "Model comparison"]
    }
  ]

  const enableServices: Service[] = [
    {
      icon: Users,
      title: "Co-Build Engagements",
      description: "We build a harness alongside your engineers on a real use case. You leave with a working agent and a team that knows how to build the next one.",
      features: ["Pair programming", "Shared delivery backlog", "Knowledge transfer plan", "Handover documentation"]
    },
    {
      icon: MessageSquare,
      title: "Harness Engineering Advisory",
      description: "Ongoing access to senior harness engineering expertise for design decisions, reviews, and unblocking your teams.",
      features: ["Architecture reviews", "Design office hours", "Code & prompt reviews", "Model & framework guidance"]
    },
    {
      icon: Building2,
      title: "Agent Platform Team Setup",
      description: "Stand up the internal team that owns your agent platform, sets harness standards, and helps the rest of the organization build agents.",
      features: ["Team charter & structure", "Reference harness architectures", "Internal standards & templates", "Adoption metrics"]
    }
  ]

  const allServices = [...advisoryServices, ...buildServices, ...enableServices]

  const sections = [
    {
      id: 'advisory',
      title: 'Advisory & Strategy',
      subtitle: 'Know what the agent should do, which model fits, and what harness it needs.',
      icon: Compass,
      services: advisoryServices,
      background: '',
      columns: 'md:grid-cols-3',
    },
    {
      id: 'build',
      title: 'Build',
      subtitle: 'Harnesses and platforms built for production, not demos.',
      icon: Bot,
      services: buildServices,
      background: 'bg-gray-50',
      columns: 'md:grid-cols-2 lg:grid-cols-3',
    },
    {
      id: 'enable',
      title: 'Enable',
      subtitle: 'Grow your own harness engineering team so you don\'t depend on us.',
      icon: Users,
      services: enableServices,
      background: '',
      columns: 'md:grid-cols-3',
    },
  ]

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Odovey Consulting',
          url: 'https://odovey.com/services/',
          description,
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Harness Engineering Services',
            itemListElement: allServices.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                description: s.description,
              },
            })),
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Harness Engineering
              <span className="text-primary-600 block">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              An agent is a model inside a harness. We design, build, and harden harnesses, from your first agent to an enterprise agent platform, and teach your team to do it themselves.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
                  {section.title}
                </a>
              ))}
              <Link href="/training" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
                Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className={`section-padding scroll-mt-20 ${section.background}`}>
          <div className="container-max">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <section.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            <div className={`grid grid-cols-1 ${section.columns} gap-8`}>
              {section.services.map((service) => (
                <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Training teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Looking for Corporate Training?</h2>
              <p className="text-gray-600">
                Our harness engineering bootcamps take engineers from a bare model to a production-ready agent, one primitive at a time. Delivered on-site or virtually.
              </p>
            </div>
            <Link href="/training" className="btn-primary flex-shrink-0">
              View Training Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How an Engagement Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Short feedback loops, working software early, and a deliberate handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Define', text: 'Start from what the agent should do. Map the work, set success criteria, and confirm an agent is the right tool.' },
              { title: 'Design', text: 'Pick models that fit the work, then shape the harness around them, primitive by primitive.' },
              { title: 'Build & Evaluate', text: 'Build iteratively and measure each version against a task suite with known right answers.' },
              { title: 'Harden & Hand Over', text: 'Answer the six production questions, then hand over the code, runbooks, and know-how.' },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us what you want your agents to do, or which team you want to upskill. We&apos;ll propose a practical first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
