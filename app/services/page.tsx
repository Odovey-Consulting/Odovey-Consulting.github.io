import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Compass,
  Workflow,
  Wrench,
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

const description = 'Forward deployed engineering services for agentic AI: strategy and assessments, agentic platforms, agents and agentic workflows, custom agent harnesses, integrations, deployment and production hardening, evaluation, and team enablement.'

export const metadata: Metadata = {
  title: 'Agentic AI Services',
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
      title: "Agentic AI Strategy & Use-Case Design",
      description: "Find where agents create real value in your organization, choose the right approach for each use case, and build a roadmap you can execute.",
      features: ["Use-case discovery & prioritization", "Model & technology selection", "Solution architecture", "Build vs. buy analysis"]
    },
    {
      icon: ClipboardCheck,
      title: "Readiness & Architecture Assessment",
      description: "Review your data, systems, security posture, and any existing agents to see what is ready, what is missing, and what will break first.",
      features: ["Platform & infrastructure review", "Existing agent review", "Production readiness scorecard", "Prioritized remediation plan"]
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
      icon: Layers,
      title: "Agentic Platforms",
      description: "Deploy and configure the shared foundation your teams use to build and run agents: governed model access, routing, policy, and observability.",
      features: ["Model access & gateway configuration", "Policy, quotas & cost controls", "Shared agent services & templates", "Self-service developer experience"]
    },
    {
      icon: Workflow,
      title: "Agents & Agentic Workflows",
      description: "Build agents that do real work in your business processes, from structured, workflow-driven automation to autonomous, multi-step agents.",
      features: ["Workflow-based agents", "Autonomous & multi-agent systems", "Human-in-the-loop approvals", "Long-running & background agents"]
    },
    {
      icon: Wrench,
      title: "Custom Agent Harnesses",
      description: "Build internal agents and tools your organization fully owns, shaped around your systems, security requirements, and the way your teams work.",
      features: ["Harness design & engineering", "Context & memory design", "Sandboxed execution", "Model-agnostic interfaces"]
    },
    {
      icon: Plug,
      title: "Tools, Integrations & Data",
      description: "Connect agents to the systems where work happens, through well-scoped tools and secure access to your data.",
      features: ["Tool design & interfaces", "Model Context Protocol (MCP) servers", "API & data connectors", "Retrieval & knowledge access"]
    },
    {
      icon: ShieldCheck,
      title: "Deployment & Production Hardening",
      description: "Deploy into your cloud or on-premises environment with the persistence, security, observability, resilience, and performance production demands.",
      features: ["Infrastructure as code", "Identity, secrets & least privilege", "Tracing, logging & audit trails", "Reliability & cost optimization"]
    },
    {
      icon: Activity,
      title: "Evaluation & Quality",
      description: "Measure whether agents actually work, judging them by what they did and not what they said, and catch regressions before your users do.",
      features: ["Task suites & graders", "Outcome-based checks", "Regression gates in CI", "Model comparison"]
    }
  ]

  const enableServices: Service[] = [
    {
      icon: Users,
      title: "Co-Build Engagements",
      description: "Our forward deployed engineers build alongside yours on a real use case. You leave with a working solution and a team that can build the next one.",
      features: ["Pair programming", "Shared delivery backlog", "Knowledge transfer plan", "Handover documentation"]
    },
    {
      icon: MessageSquare,
      title: "Technical Advisory",
      description: "Ongoing access to senior agentic AI engineers for design decisions, architecture and code reviews, and unblocking your teams.",
      features: ["Architecture reviews", "Design office hours", "Code & prompt reviews", "Technology guidance"]
    },
    {
      icon: Building2,
      title: "Platform Team Setup",
      description: "Stand up the internal team that owns your agentic platform, sets standards, and helps the rest of the organization build agents.",
      features: ["Team charter & structure", "Reference architectures", "Internal standards & templates", "Adoption metrics"]
    }
  ]

  const allServices = [...advisoryServices, ...buildServices, ...enableServices]

  const sections = [
    {
      id: 'advisory',
      title: 'Advisory & Strategy',
      subtitle: 'Decide where agents belong and what it will take to get them there.',
      icon: Compass,
      services: advisoryServices,
      background: '',
      columns: 'md:grid-cols-3',
    },
    {
      id: 'build',
      title: 'Build & Deploy',
      subtitle: 'Agentic solutions and platforms, built and deployed in your environment.',
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
              <span className="text-primary-600 block">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our forward deployed engineers plan, build, and deploy agentic solutions and platforms in your environment, from your first agent to an enterprise platform, and leave your team able to run them.
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
                We offer hands-on engineering bootcamps, production and platform workshops, and executive briefings, delivered on-site or virtually.
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
              { title: 'Discover', text: 'Embed with your team, map the work, set success criteria, and confirm an agent is the right tool.' },
              { title: 'Design', text: 'Choose models and infrastructure that fit, and design the solution around your systems and constraints.' },
              { title: 'Build & Deploy', text: 'Ship in short iterations into your environment, measuring each version against real tasks.' },
              { title: 'Harden & Hand Over', text: 'Make it production-ready, then hand over the code, runbooks, and know-how.' },
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
            Tell us what you want to build, or which team you want to upskill. We&apos;ll propose a practical first step.
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
