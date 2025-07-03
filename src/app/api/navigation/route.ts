import { NextResponse } from 'next/server'
import { client, queries } from '@/lib/sanity'

export async function GET() {
  try {
    const [churchInfo, pages] = await Promise.all([
      client.fetch(queries.churchInfo),
      client.fetch(queries.navigationPages)
    ])

    return NextResponse.json({
      churchInfo,
      pages
    })
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch navigation data' },
      { status: 500 }
    )
  }
}