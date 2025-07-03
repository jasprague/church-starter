import { NextResponse } from 'next/server'
import { client, queries } from '@/lib/sanity'

export async function GET() {
  try {
    const churchInfo = await client.fetch(queries.churchInfo)

    return NextResponse.json({
      churchInfo
    })
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch footer data' },
      { status: 500 }
    )
  }
}