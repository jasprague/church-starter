import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

export async function GET() {
  try {
    // Create client directly with hardcoded values for testing
    const testClient = createClient({
      projectId: '52egrwar',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })

    // Try a simple query
    const result = await testClient.fetch('*[_type == "churchInfo"][0]{name}')
    
    return NextResponse.json({
      success: true,
      data: result,
      message: 'Sanity connection successful'
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error',
      stack: error.stack || 'No stack trace',
      name: error.name || 'Unknown error type'
    }, { status: 500 })
  }
}