import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    theme: process.env.CHURCH_THEME || 'classic'
  })
}