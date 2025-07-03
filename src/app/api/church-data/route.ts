import { NextResponse } from 'next/server'
import { client, queries } from '@/lib/sanity'

export async function GET() {
  try {
    const [
      churchInfo,
      services,
      upcomingEvents,
      featuredSermon,
      announcements
    ] = await Promise.all([
      client.fetch(queries.churchInfo),
      client.fetch(queries.services),
      client.fetch(queries.upcomingEvents),
      client.fetch(queries.featuredSermon),
      client.fetch(queries.homepageAnnouncements)
    ])

    return NextResponse.json({
      churchInfo,
      services,
      upcomingEvents: upcomingEvents.slice(0, 3),
      featuredSermon,
      announcements: announcements.slice(0, 2)
    })
  } catch (error) {
    console.error('Error fetching church data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch church data' },
      { status: 500 }
    )
  }
}