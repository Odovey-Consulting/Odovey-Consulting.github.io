import type { Metadata } from 'next'
import { Users, Target, Award, Lightbulb, Globe, Rocket, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: "O'Dovey AI is a professional services firm of forward deployed engineers who build and deploy agentic AI solutions and platforms for organizations, and train their teams to run them.",
  alternates: {
    canonical: '/about/',
  },
}

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-primary-600 block">O&apos;Dovey AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a professional services firm of forward deployed engineers. We build and deploy agentic AI solutions and platforms inside organizations, and we teach their people to run and extend them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To help organizations move from AI experiments to agentic solutions running in production by putting experienced engineers directly alongside their teams.
              </p>
              <p className="text-gray-600">
                We measure success by what your team can do after we leave, not just by what we deliver while we are there.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                A future where every organization can confidently build and run its own agents, with the platforms, skills, and guardrails to do it well.
              </p>
              <p className="text-gray-600">
                Models change every few months. The harness primitives don&apos;t. We help clients invest in what lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Over Prototypes</h3>
              <p className="text-gray-600">
                We deploy into your real environment and answer the hard production questions from day one. Agents that never leave the demo stage don&apos;t create value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Teach, Don&apos;t Gatekeep</h3>
              <p className="text-gray-600">
                Knowledge transfer is part of every engagement, and we teach our methods in the open. We want you to be independent of us.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Honest Advice</h3>
              <p className="text-gray-600">
                Not every problem needs an agent. We tell you when a simpler solution is the better one, and we stay vendor-neutral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured methodology that we apply consistently across engagements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600 text-sm">
                Embed with your team, understand the work, and confirm an agent is the right fit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-600 text-sm">
                Build and deploy in short iterations, measured against real tasks in your environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enable</h3>
              <p className="text-gray-600 text-sm">
                Train and coach your team so they can operate, extend, and scale what we built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Forward Deployed Engineers</h3>
                    <p className="text-gray-600">We are hands-on engineers who work in your environment and ship to production, not advisors who hand over a slide deck.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Builders Who Teach</h3>
                    <p className="text-gray-600">We wrote an open curriculum on harness engineering, and the engineers who build your solutions are the same people who teach it.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Full-Stack Delivery</h3>
                    <p className="text-gray-600">From gateways and infrastructure to agents and workflows, we work across the whole stack, so your solutions run on a foundation that is secure, observable, and able to scale.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Vendor-Neutral</h3>
                    <p className="text-gray-600">We don&apos;t resell models or platforms. We choose what fits your needs and build so you can change it later.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <Globe className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Based in Houston, Serving Globally</h3>
              </div>
              <p className="text-gray-600 text-center">
                We work with organizations wherever they are. Consulting, co-build, and training engagements are delivered remotely or on-site as each engagement requires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
