'use client'

import { useState, useEffect } from 'react'
import { ChurchInfo, Service, Event, Sermon, Announcement } from '@/types/sanity'

export default function Home() {
  const [churchInfo, setChurchInfo] = useState<ChurchInfo | null>(null)
  const [services, setServices] = useState<Service[]>([])
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [featuredSermon, setFeaturedSermon] = useState<Sermon | null>(null)
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/church-data')
        if (!response.ok) {
          throw new Error('Failed to fetch church data')
        }
        const data = await response.json()

        setChurchInfo(data.churchInfo)
        setServices(data.services)
        setUpcomingEvents(data.upcomingEvents)
        setFeaturedSermon(data.featuredSermon)
        setAnnouncements(data.announcements)
      } catch (error) {
        console.error('Error fetching homepage data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            {churchInfo?.name || 'Welcome to Our Church'}
          </h1>
          {churchInfo?.tagline && (
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              {churchInfo.tagline}
            </p>
          )}
          {churchInfo?.description && (
            <p className="text-lg mb-8 max-w-3xl mx-auto font-body">
              {churchInfo.description}
            </p>
          )}
          <div className="space-x-4">
            <a 
              href="#services" 
              className="bg-white text-primary px-8 py-3 theme-border-radius font-semibold hover:bg-gray-50 transition-colors font-body"
            >
              Join Us This Sunday
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 theme-border-radius font-semibold hover:bg-white hover:text-primary transition-colors font-body"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Announcements */}
      {announcements.length > 0 && (
        <section className="bg-yellow-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Announcements</h2>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement._id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">{announcement.title}</h3>
                  <div className="text-gray-600">
                    {announcement.content.map((block: any, index: number) => (
                      <p key={index}>{block.children?.[0]?.text}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-primary mb-4">Service Times</h2>
            <p className="text-lg text-gray-600 font-body">Join us for worship throughout the week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service._id} className="bg-gray-50 card-padding theme-border-radius text-center shadow-lg">
                <h3 className="text-xl font-heading mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-2 capitalize font-body">{service.dayOfWeek}s</p>
                <p className="text-lg font-medium text-secondary font-body">{service.time}</p>
                {service.location && (
                  <p className="text-gray-600 mt-2">{service.location}</p>
                )}
                {service.description && (
                  <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                )}
                {service.livestreamUrl && (
                  <a 
                    href={service.livestreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                  >
                    Watch Live
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      {featuredSermon && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Sermon</h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{featuredSermon.title}</h3>
                <p className="text-gray-600 mb-4">
                  by {featuredSermon.preacher?.name} • {new Date(featuredSermon.date).toLocaleDateString()}
                </p>
                {featuredSermon.scripture && (
                  <p className="text-blue-600 font-medium mb-4">{featuredSermon.scripture}</p>
                )}
                <div className="flex space-x-4">
                  {featuredSermon.audioUrl && (
                    <a 
                      href={featuredSermon.audioUrl}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Listen
                    </a>
                  )}
                  {featuredSermon.videoUrl && (
                    <a 
                      href={featuredSermon.videoUrl}
                      className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
                    >
                      Watch
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Join us for these special gatherings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event._id} className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">
                      {new Date(event.startDate).toLocaleDateString()}
                    </p>
                    {event.location && (
                      <p className="text-gray-600 mb-4">{event.location}</p>
                    )}
                    <a 
                      href={`/events/${event.slug.current}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="/events"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                View All Events
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}