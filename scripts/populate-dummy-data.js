const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '52egrwar',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk3cucpb43rgUMwUkp3ykg4aKWCS4eAuTBpTU3VUrFcXMAdCy5VN59idZEI5jiifcUrETqeU43H9HuVAkg3DiiijG6Iq6NrmaFIyL8ilPwdqQgZ2zzfS6Ded4rqXGbGZXI8hSbRofLBvEKvJOOiZnSP2zevRw7WpAD8cnKRjywLtb9cShJxC'
})

const dummyData = {
  // Church Info
  churchInfo: {
    _type: 'churchInfo',
    _id: 'church-info',
    name: 'Grace Community Church',
    tagline: 'Come as you are, leave transformed',
    description: 'A welcoming community where faith, hope, and love come together. Join us as we grow in relationship with God and each other.',
    address: {
      street: '123 Main Street',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701'
    },
    contact: {
      phone: '(555) 123-4567',
      email: 'info@gracecommunitychurch.org',
      website: 'https://gracecommunitychurch.org'
    },
    socialMedia: {
      facebook: 'https://facebook.com/gracecommunitychurch',
      instagram: 'https://instagram.com/gracecommunitychurch',
      youtube: 'https://youtube.com/@gracecommunitychurch'
    },
    theme: 'classic'
  },

  // Services
  services: [
    {
      _type: 'service',
      _id: 'sunday-worship',
      name: 'Sunday Worship',
      description: 'Our main worship service with music, teaching, and communion',
      dayOfWeek: 'sunday',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      isRecurring: true,
      livestreamUrl: 'https://youtube.com/live/example',
      order: 1
    },
    {
      _type: 'service',
      _id: 'wednesday-prayer',
      name: 'Wednesday Prayer Meeting',
      description: 'Join us for prayer and Bible study',
      dayOfWeek: 'wednesday',
      time: '7:00 PM',
      location: 'Fellowship Hall',
      isRecurring: true,
      order: 2
    }
  ],

  // Staff
  staff: [
    {
      _type: 'staff',
      _id: 'pastor-john',
      name: 'Pastor John Smith',
      slug: { _type: 'slug', current: 'pastor-john-smith' },
      position: 'Senior Pastor',
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Pastor John has been leading Grace Community Church for over 15 years. He is passionate about helping people discover their purpose in Christ and building authentic community.'
            }
          ]
        }
      ],
      email: 'pastor@gracecommunitychurch.org',
      phone: '(555) 123-4567',
      isOrdained: true,
      startDate: '2009-01-15',
      isActive: true,
      displayOrder: 1,
      departments: ['leadership', 'pastoral-care']
    },
    {
      _type: 'staff',
      _id: 'worship-director',
      name: 'Sarah Johnson',
      slug: { _type: 'slug', current: 'sarah-johnson' },
      position: 'Worship Director',
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Sarah leads our worship team and has a heart for creating meaningful worship experiences that connect people with God.'
            }
          ]
        }
      ],
      email: 'worship@gracecommunitychurch.org',
      isOrdained: false,
      startDate: '2015-08-01',
      isActive: true,
      displayOrder: 2,
      departments: ['worship']
    }
  ],

  // Events
  events: [
    {
      _type: 'event',
      _id: 'easter-service',
      title: 'Easter Celebration Service',
      slug: { _type: 'slug', current: 'easter-celebration-service' },
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Join us for a special Easter celebration with music, message, and fellowship. This is a wonderful opportunity to invite friends and family.'
            }
          ]
        }
      ],
      startDate: '2024-03-31T10:00:00.000Z',
      endDate: '2024-03-31T11:30:00.000Z',
      location: 'Main Sanctuary',
      category: 'special',
      isPublic: true,
      registrationRequired: false
    },
    {
      _type: 'event',
      _id: 'youth-retreat',
      title: 'Youth Winter Retreat',
      slug: { _type: 'slug', current: 'youth-winter-retreat' },
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A weekend retreat for youth grades 6-12. Activities include worship, teaching, games, and fellowship.'
            }
          ]
        }
      ],
      startDate: '2024-02-16T18:00:00.000Z',
      endDate: '2024-02-18T15:00:00.000Z',
      location: 'Pine Ridge Camp',
      category: 'youth',
      isPublic: true,
      registrationRequired: true,
      registrationUrl: 'https://gracecommunitychurch.org/youth-retreat',
      maxAttendees: 50
    }
  ],

  // Sermons
  sermons: [
    {
      _type: 'sermon',
      _id: 'faith-in-action',
      title: 'Faith in Action',
      slug: { _type: 'slug', current: 'faith-in-action' },
      preacher: { _type: 'reference', _ref: 'pastor-john' },
      date: '2024-01-21',
      series: 'Living Faith',
      scripture: 'James 2:14-26',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Exploring how genuine faith naturally produces good works and transforms our daily lives.'
            }
          ]
        }
      ],
      audioUrl: 'https://example.com/sermons/faith-in-action.mp3',
      videoUrl: 'https://youtube.com/watch?v=example',
      tags: ['faith', 'works', 'transformation'],
      duration: 35,
      isFeatured: true
    }
  ],

  // Ministries
  ministries: [
    {
      _type: 'ministry',
      _id: 'youth-ministry',
      name: 'Youth Ministry',
      slug: { _type: 'slug', current: 'youth-ministry' },
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Our youth ministry serves students in grades 6-12, providing a safe place to grow in faith and friendship.'
            }
          ]
        }
      ],
      // leader: { _type: 'reference', _ref: 'worship-director' },
      targetAudience: 'youth',
      meetingTime: 'Sundays, 6:00 PM',
      meetingLocation: 'Youth Room',
      contactEmail: 'youth@gracecommunitychurch.org',
      isActive: true,
      displayOrder: 1
    },
    {
      _type: 'ministry',
      _id: 'childrens-ministry',
      name: "Children's Ministry",
      slug: { _type: 'slug', current: 'childrens-ministry' },
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Fun, age-appropriate programs for children from nursery through 5th grade during Sunday worship.'
            }
          ]
        }
      ],
      targetAudience: 'children',
      meetingTime: 'Sundays, 10:00 AM',
      meetingLocation: 'Children\'s Wing',
      contactEmail: 'children@gracecommunitychurch.org',
      isActive: true,
      displayOrder: 2
    }
  ],

  // Announcements
  announcements: [
    {
      _type: 'announcement',
      _id: 'welcome-visitors',
      title: 'Welcome New Visitors!',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We\'re so glad you\'re here! Please stop by our Welcome Center after service to get a welcome gift and learn more about our church family.'
            }
          ]
        }
      ],
      startDate: '2024-01-01T00:00:00.000Z',
      endDate: '2024-12-31T23:59:59.000Z',
      priority: 'medium',
      category: 'general',
      showOnHomepage: true,
      isActive: true
    },
    {
      _type: 'announcement',
      _id: 'winter-weather',
      title: 'Winter Weather Policy',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Due to potential winter weather, please check our website and social media for any service cancellations or delays.'
            }
          ]
        }
      ],
      startDate: '2024-01-15T00:00:00.000Z',
      endDate: '2024-03-15T23:59:59.000Z',
      priority: 'high',
      category: 'service-changes',
      showOnHomepage: true,
      isActive: true
    }
  ]
}

async function populateData() {
  try {
    console.log('🚀 Starting to populate dummy data...')

    // Create documents in order to handle references
    console.log('📝 Creating church info...')
    await client.createOrReplace(dummyData.churchInfo)

    console.log('📝 Creating services...')
    for (const service of dummyData.services) {
      await client.createOrReplace(service)
    }

    console.log('📝 Creating staff members...')
    for (const staff of dummyData.staff) {
      await client.createOrReplace(staff)
    }

    console.log('📝 Creating events...')
    for (const event of dummyData.events) {
      await client.createOrReplace(event)
    }

    console.log('📝 Creating sermons...')
    for (const sermon of dummyData.sermons) {
      await client.createOrReplace(sermon)
    }

    console.log('📝 Creating ministries...')
    // Fix ministry references to use correct staff IDs
    const updatedMinistries = dummyData.ministries.map(ministry => {
      if (ministry._id === 'youth-ministry') {
        return {
          ...ministry,
          leader: { _type: 'reference', _ref: 'worship-director' }
        }
      }
      return ministry
    })
    
    for (const ministry of updatedMinistries) {
      await client.createOrReplace(ministry)
    }

    console.log('📝 Creating announcements...')
    for (const announcement of dummyData.announcements) {
      await client.createOrReplace(announcement)
    }

    console.log('✅ Successfully populated dummy data!')
    console.log('🎉 Your church website should now display with sample content!')
    console.log('🌐 Visit http://localhost:3000 to see your website!')
    console.log('⚙️ Visit http://localhost:3334 to manage content in Sanity Studio!')
    
  } catch (error) {
    console.error('❌ Error populating data:', error)
  }
}

populateData()