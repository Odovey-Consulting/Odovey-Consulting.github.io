import type { Metadata } from 'next'
import { Users, Target, Award, Lightbulb, Globe, Rocket, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Odovey Consulting — our mission to empower organizations with AI and cloud solutions, our values of excellence, innovation, and partnership, and our proven approach to digital transformation.',
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
              <span className="text-primary-600 block">Odovey Consulting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a forward-thinking consultancy dedicated to helping businesses harness the transformative power of artificial intelligence and cloud technology.
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
                To empower organizations with cutting-edge AI and cloud solutions that drive innovation, efficiency, and sustainable growth. We believe in making advanced technology accessible and practical for businesses of all sizes.
              </p>
              <p className="text-gray-600">
                Our mission extends beyond implementation – we aim to build partnerships that evolve with your business needs and technological advancements.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading catalyst for digital transformation, recognized globally for our expertise in AI implementation and cloud architecture. We envision a future where every business can leverage these technologies to reach their full potential.
              </p>
              <p className="text-gray-600">
                We strive to set industry standards for excellence, innovation, and client success in the rapidly evolving landscape of AI and cloud services.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We deliver exceptional quality in every project, continuously raising the bar for technical excellence and client satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and methodologies to provide forward-thinking solutions that drive business success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, transparency, and mutual success, treating every client as a valued partner.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of your current infrastructure, processes, and business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategize</h3>
              <p className="text-gray-600 text-sm">
                Development of customized strategies and roadmaps aligned with your business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Deep Technical Expertise</h3>
                    <p className="text-gray-600">Our team consists of certified cloud architects and AI specialists with extensive real-world experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Practical Experience</h3>
                    <p className="text-gray-600">We have delivered AI and cloud projects across multiple industries and business sizes.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Strategic Partnership</h3>
                    <p className="text-gray-600">We work as an extension of your team, providing strategic guidance throughout each engagement.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI-First Approach</h3>
                    <p className="text-gray-600">We specialize in modern AI infrastructure — model deployment, agent development, fine-tuning, and RAG — built on solid cloud foundations.</p>
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
                We bring global best practices in AI and cloud infrastructure while understanding local business contexts and requirements. Our professional services are delivered remotely and on-site as each engagement demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
