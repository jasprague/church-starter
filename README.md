# Church Website - Multi-Tenant CMS

A modern church website built with Next.js and Sanity CMS, designed for multi-tenant use with theme customization.

## Features

- **Multi-tenant architecture**: One codebase, multiple churches
- **Theme system**: Classic, Modern, Minimal, and Traditional themes
- **Comprehensive content model**: Church info, services, events, sermons, staff, ministries, announcements, and custom pages
- **Responsive design**: Built with Tailwind CSS
- **Type-safe**: Full TypeScript support

## Content Model

### Core Schemas

- **Church Info**: Church details, contact info, logo, theme selection
- **Services**: Worship services with times, locations, livestream links
- **Events**: Church events with registration and categorization
- **Sermons**: Sermon archive with audio/video and scripture references
- **Staff**: Team members with bios, photos, and departments
- **Ministries**: Church ministries with leaders and target audiences
- **Announcements**: Time-based announcements with priority levels
- **Pages**: Custom pages with SEO and navigation options

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file and configure:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-api-token

# Theme Configuration
CHURCH_THEME=classic
```

### 2. Sanity Setup

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project
3. Update the project ID in your environment variables
4. Deploy the studio: `cd studio && npm run deploy`

### 3. Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Sanity Studio (in separate terminal)
cd studio
npm run dev
```

## Theme Customization

The theme system supports four built-in themes:

- **Classic**: Traditional blue and red color scheme with serif headings
- **Modern**: Contemporary indigo and pink with clean lines
- **Minimal**: Subtle grays with maximum whitespace
- **Traditional**: Warm browns and ambers with serif fonts

Themes are configured via environment variables and can be customized per church deployment.

## Multi-Tenant Setup

For multiple churches:

1. Deploy separate Sanity projects for each church
2. Set unique `NEXT_PUBLIC_SANITY_PROJECT_ID` for each deployment
3. Configure theme via `CHURCH_THEME` environment variable
4. Each church gets their own content while sharing the same codebase

## Content Management

Access the Sanity Studio at `/studio` (in development) or deploy to `your-project-name.sanity.studio` for production content management.

## Deployment

This project is optimized for deployment on Vercel, Netlify, or any platform supporting Next.js applications.

## Next Steps

1. Set up your Sanity project and update environment variables
2. Add content through the Sanity Studio
3. Customize themes as needed
4. Deploy your church website

## License

MIT License