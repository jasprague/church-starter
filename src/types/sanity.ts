export interface ChurchInfo {
  _id: string
  name: string
  tagline?: string
  description?: string
  logo?: any
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  contact?: {
    phone: string
    email: string
    website: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    youtube?: string
    twitter?: string
  }
  theme: 'classic' | 'modern' | 'minimal' | 'traditional'
}

export interface Service {
  _id: string
  name: string
  description?: string
  dayOfWeek: string
  time: string
  location?: string
  isRecurring: boolean
  livestreamUrl?: string
  order: number
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  description?: any[]
  startDate: string
  endDate?: string
  location?: string
  featuredImage?: any
  category?: string
  isPublic: boolean
  registrationRequired: boolean
  registrationUrl?: string
  maxAttendees?: number
}

export interface Sermon {
  _id: string
  title: string
  slug: { current: string }
  preacher: Staff
  date: string
  series?: string
  scripture?: string
  description?: any[]
  audioUrl?: string
  videoUrl?: string
  thumbnailImage?: any
  tags?: string[]
  duration?: number
  isFeatured: boolean
}

export interface Staff {
  _id: string
  name: string
  slug: { current: string }
  position: string
  bio?: any[]
  photo?: any
  email?: string
  phone?: string
  isOrdained: boolean
  startDate?: string
  isActive: boolean
  displayOrder: number
  departments?: string[]
}

export interface Ministry {
  _id: string
  name: string
  slug: { current: string }
  description?: any[]
  leader?: Staff
  featuredImage?: any
  targetAudience?: string
  meetingTime?: string
  meetingLocation?: string
  contactEmail?: string
  isActive: boolean
  displayOrder: number
}

export interface Announcement {
  _id: string
  title: string
  content: any[]
  startDate: string
  endDate?: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  category: string
  showOnHomepage: boolean
  isActive: boolean
}

export interface Page {
  _id: string
  title: string
  slug: { current: string }
  content?: any[]
  seoTitle?: string
  seoDescription?: string
  isPublished: boolean
  showInNavigation: boolean
  navigationOrder?: number
}