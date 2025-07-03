import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'MISSING',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'MISSING',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'MISSING',
    hasToken: !!process.env.SANITY_API_TOKEN,
    tokenPrefix: process.env.SANITY_API_TOKEN?.substring(0, 10) + '...' || 'MISSING',
    theme: process.env.CHURCH_THEME || 'MISSING',
    nodeEnv: process.env.NODE_ENV
  })
}