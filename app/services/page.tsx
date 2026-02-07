import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Cloud,
  Zap,
  Database,
  Settings,
  Brain,
  Cpu,
  Network,
  Gauge,
  ArrowRight
} from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'AI & Cloud Professional Services',
  description: 'Comprehensive AI and cloud professional services including AI model infrastructure, agent development, fine-tuning, RAG implementation, cloud migration, multi-cloud architecture, and DevOps automation.',
  alternates: {
    canonical: '/services/',
  },
}

export default function Services() {
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration & Modernization",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Legacy System Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: Network,
      title: "Multi-Cloud Architecture",
      description: "Design and implement robust multi-cloud strategies that avoid vendor lock-in and maximize flexibility.",
      features: ["Cloud Strategy Design", "Hybrid Cloud Solutions", "Vendor Selection", "Architecture Planning"]
    },
    {
      icon: Settings,
      title: "DevOps & Automation",
      description: "Streamline your development processes with advanced DevOps practices and intelligent automation.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Process Automation"]
    },
    {
      icon: Gauge,
      title: "Performance & Cost Optimization",
      description: "Maximize your cloud ROI through intelligent resource management and performance tuning.",
      features: ["Cost Analysis", "Resource Optimization", "Performance Tuning", "Capacity Planning"]
    }
  ]

  const aiServices = [
    {
      icon: Network,
      title: "AI Model Infrastructure",
      description: "Enterprise-grade infrastructure for deploying and scaling transformer models with optimal performance and reliability.",
      features: ["GPU Cluster Management", "Model Serving Platforms", "Auto-scaling Solutions", "Performance Optimization"]
    },
    {
      icon: Brain,
      title: "AI Agent Development",
      description: "Build intelligent agents powered by large language models that automate complex workflows and decision-making.",
      features: ["Multi-Agent Systems", "Tool Integration", "Workflow Automation", "Decision Engine Design"]
    },
    {
      icon: Settings,
      title: "Supervised Fine-Tuning",
      description: "Customize foundation models for your specific use cases through advanced fine-tuning techniques and domain adaptation.",
      features: ["Custom Dataset Preparation", "LoRA & QLoRA Training", "Model Optimization", "Performance Evaluation"]
    },
    {
      icon: Database,
      title: "RAG Implementation",
      description: "Retrieval-Augmented Generation systems that combine your proprietary data with large language models for accurate, contextual responses.",
      features: ["Vector Database Setup", "Embedding Optimization", "Retrieval Pipeline Design", "Context Management"]
    },
    {
      icon: Zap,
      title: "Language & Vision Models",
      description: "Deploy and integrate state-of-the-art transformer models for text generation, image creation, and multimodal applications.",
      features: ["GPT Integration", "Image Generation Models", "Multimodal Solutions", "Custom Model Deployment"]
    },
    {
      icon: Cpu,
      title: "AI System Integrations",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows with robust APIs and interfaces.",
      features: ["API Development", "System Integration", "Legacy System Modernization", "Real-time Processing"]
    }
  ]

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Odovey Consulting',
          url: 'https://odovey.com/services/',
          description: 'Comprehensive AI and cloud professional services including AI model infrastructure, agent development, fine-tuning, RAG implementation, cloud migration, multi-cloud architecture, and DevOps automation.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI & Cloud Services',
            itemListElement: [
              ...aiServices.map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: s.title,
                  description: s.description,
                },
              })),
              ...cloudServices.map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: s.title,
                  description: s.description,
                },
              })),
            ],
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-primary-600 block">Professional Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Modern AI-first solutions and cloud infrastructure designed for the era of large language models and intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-secondary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Next-generation AI infrastructure and services powered by transformer models, designed for the GPT era and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions that modernize your infrastructure and accelerate digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Delivery Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured methodology that we apply consistently across engagements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of your current infrastructure, processes, and business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategize</h3>
              <p className="text-gray-600 text-sm">
                Development of customized strategies and roadmaps aligned with your business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement</h3>
              <p className="text-gray-600 text-sm">
                Careful execution of solutions with minimal disruption to your ongoing operations.
              </p>
            </div>
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
            Let&apos;s discuss how our AI-first approach can transform your business with cutting-edge language models and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/about" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
