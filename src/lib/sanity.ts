import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false, // Disable CDN for development
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published', // Only fetch published documents
  stega: false, // Disable stega for cleaner queries
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  churchInfo: `*[_type == "churchInfo"][0]`,
  services: `*[_type == "service"] | order(dayOfWeek asc, order asc)`,
  upcomingEvents: `*[_type == "event" && startDate >= now()] | order(startDate asc)`,
  recentSermons: `*[_type == "sermon"] | order(date desc)[0...6] {
    ...,
    preacher->
  }`,
  featuredSermon: `*[_type == "sermon" && isFeatured == true][0] {
    ...,
    preacher->
  }`,
  staff: `*[_type == "staff" && isActive == true] | order(displayOrder asc)`,
  ministries: `*[_type == "ministry" && isActive == true] | order(displayOrder asc) {
    ...,
    leader->
  }`,
  activeAnnouncements: `*[_type == "announcement" && isActive == true && startDate <= now() && (endDate >= now() || !defined(endDate))] | order(priority desc, startDate desc)`,
  homepageAnnouncements: `*[_type == "announcement" && isActive == true && showOnHomepage == true && startDate <= now() && (endDate >= now() || !defined(endDate))] | order(priority desc, startDate desc)`,
  navigationPages: `*[_type == "page" && isPublished == true && showInNavigation == true] | order(navigationOrder asc)`,
  allPages: `*[_type == "page" && isPublished == true]`,
}