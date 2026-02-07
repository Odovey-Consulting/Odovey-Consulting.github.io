import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Odovey Consulting Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
                      <span className="text-xl font-bold">
          Odovey Consulting
        </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading consultancy specializing in AI and cloud services. We help businesses transform and scale with cutting-edge technology solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <Mail className="h-4 w-4" />
              <span>sales@odovey.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <MapPin className="h-4 w-4" />
              <span>Houston, Texas, USA</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/odovey-consulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>AI Model Infrastructure</li>
              <li>AI Agent Development</li>
              <li>RAG Implementation</li>
              <li>Cloud Migration & Modernization</li>
              <li>Multi-Cloud Architecture</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2022–2026 Chasing Cloud Careers LLC d/b/a Odovey Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
