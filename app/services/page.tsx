import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Compass,
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

const description = 'Agentic AI professional services: strategy and use-case discovery, custom AI agent development, agent platform engineering, integrations, security, and evaluation, plus team enablement and co-build engagements.'

export const metadata: Metadata = {
  title: 'Agentic AI Consulting Services',
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
      title: "Agentic AI Strategy & Use-Case Discovery",
      description: "Identify where agents create real value in your business, and where they don't, then prioritize a roadmap you can execute.",
      features: ["Use-case workshops", "Value & feasibility scoring", "Build vs. buy analysis", "Prioritized roadmap"]
    },
    {
      icon: ClipboardCheck,
      title: "Agent Readiness Assessment",
      description: "Evaluate your data, systems, APIs, security posture, and skills to understand what must be true before agents can safely act.",
      features: ["Data & API readiness", "Platform gap analysis", "Skills assessment", "Risk register"]
    },
    {
      icon: Scale,
      title: "AI Governance & Operating Model",
      description: "Define how agents are approved, monitored, and owned so you can scale adoption without losing control.",
      features: ["Autonomy & approval policies", "Responsible AI guidelines", "Ownership & support model", "Compliance mapping"]
    }
  ]

  const buildServices: Service[] = [
    {
      icon: Bot,
      title: "Custom Agent Development",
      description: "Design and ship AI agents that reason, plan, and take action across your workflows, from single-task assistants to multi-agent systems.",
      features: ["Agent & workflow design", "Multi-agent orchestration", "Human-in-the-loop flows", "Production hardening"]
    },
    {
      icon: Layers,
      title: "Agent Platform Engineering",
      description: "Build the shared foundation your teams use to create, deploy, and operate agents consistently across the organization.",
      features: ["Model gateway & routing", "Agent runtime & memory", "Reusable templates", "Self-service developer experience"]
    },
    {
      icon: Plug,
      title: "Tool & System Integrations",
      description: "Connect agents to the systems where work actually happens, using standard protocols and well-scoped interfaces.",
      features: ["Model Context Protocol (MCP) servers", "API & data connectors", "Retrieval & knowledge access", "Legacy system integration"]
    },
    {
      icon: ShieldCheck,
      title: "Agent Security & Guardrails",
      description: "Protect against prompt injection, data leakage, and overreach with defense-in-depth controls designed for autonomous systems.",
      features: ["Least-privilege tool access", "Identity & secrets handling", "Input/output guardrails", "Threat modeling & red teaming"]
    },
    {
      icon: Activity,
      title: "Evaluation, Observability & AgentOps",
      description: "Know whether your agents work. Measure quality, trace every step, and keep cost and latency under control in production.",
      features: ["Evaluation suites & benchmarks", "Tracing & monitoring", "Cost & latency optimization", "Release & regression gates"]
    }
  ]

  const enableServices: Service[] = [
    {
      icon: Users,
      title: "Co-Build Engagements",
      description: "We build alongside your engineers on a real use case, so you leave with a working agent and a team that knows how to build the next one.",
      features: ["Pair programming", "Shared delivery backlog", "Knowledge transfer plan", "Handover documentation"]
    },
    {
      icon: MessageSquare,
      title: "Technical Coaching & Advisory",
      description: "Ongoing access to senior agentic AI expertise for architecture reviews, design decisions, and unblocking your teams.",
      features: ["Architecture reviews", "Design office hours", "Code & prompt reviews", "Technology selection guidance"]
    },
    {
      icon: Building2,
      title: "AI Center of Excellence",
      description: "Stand up an internal team that sets standards, curates reusable components, and helps the rest of the organization adopt agents.",
      features: ["CoE charter & structure", "Standards & reference architectures", "Internal community building", "Adoption metrics"]
    }
  ]

  const allServices = [...advisoryServices, ...buildServices, ...enableServices]

  const sections = [
    {
      id: 'advisory',
      title: 'Advisory & Strategy',
      subtitle: 'Decide where agents belong and what it takes to get there.',
      icon: Compass,
      services: advisoryServices,
      background: '',
      columns: 'md:grid-cols-3',
    },
    {
      id: 'build',
      title: 'Build',
      subtitle: 'Production-grade agents and the platform that lets you scale them.',
      icon: Bot,
      services: buildServices,
      background: 'bg-gray-50',
      columns: 'md:grid-cols-2 lg:grid-cols-3',
    },
    {
      id: 'enable',
      title: 'Enable',
      subtitle: 'Grow the in-house capability to build and run agents without us.',
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
            name: 'Agentic AI Services',
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
              Agentic AI
              <span className="text-primary-600 block">Professional Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From the first use case to an enterprise agent platform, we help you plan, build, secure, and operate AI agents, and leave your team able to do it themselves.
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
                We offer executive briefings, hands-on developer bootcamps, and workshops for business teams, delivered on-site or virtually.
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
              { title: 'Discover', text: 'Clarify the business outcome, map the workflow, and confirm an agent is the right tool for the job.' },
              { title: 'Design', text: 'Define the agent architecture, tools, guardrails, and evaluation criteria before writing production code.' },
              { title: 'Build', text: 'Deliver in short iterations against real data and systems, measuring quality at every step.' },
              { title: 'Enable', text: 'Hand over the code, runbooks, and know-how so your team can operate and extend what we built.' },
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
            Tell us about the workflow you want to automate or the team you want to upskill. We&apos;ll propose a practical first step.
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
