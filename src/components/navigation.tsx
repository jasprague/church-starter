'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChurchInfo, Page } from '@/types/sanity'

export function Navigation() {
  const [churchInfo, setChurchInfo] = useState<ChurchInfo | null>(null)
  const [pages, setPages] = useState<Page[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/navigation')
        if (!response.ok) {
          throw new Error('Failed to fetch navigation data')
        }
        const data = await response.json()
        setChurchInfo(data.churchInfo)
        setPages(data.pages)
      } catch (error) {
        console.error('Error fetching navigation data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center header-height">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {churchInfo?.logo && (
                <img 
                  src={churchInfo.logo.asset?.url} 
                  alt="Church Logo" 
                  className="h-8 w-8 object-contain"
                />
              )}
              <span className="font-heading text-xl text-gray-900">
                {churchInfo?.name || 'Church Website'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/sermons" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Sermons
              </Link>
              <Link href="/events" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link href="/ministries" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Ministries
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              {pages.map((page) => (
                <Link 
                  key={page._id}
                  href={`/${page.slug.current}`} 
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/sermons" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Sermons
            </Link>
            <Link href="/events" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Events
            </Link>
            <Link href="/ministries" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Ministries
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            {pages.map((page) => (
              <Link 
                key={page._id}
                href={`/${page.slug.current}`} 
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}