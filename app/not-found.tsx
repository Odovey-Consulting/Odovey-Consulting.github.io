import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500">
            Or try one of these pages:
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link href="/about" className="text-primary-600 hover:text-primary-700 text-sm">
              About Us
            </Link>
            <Link href="/services" className="text-primary-600 hover:text-primary-700 text-sm">
              Services
            </Link>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 text-sm">
              Blog
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
