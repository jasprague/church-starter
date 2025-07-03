import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Worship Service', value: 'worship'},
          {title: 'Community Event', value: 'community'},
          {title: 'Youth Event', value: 'youth'},
          {title: 'Bible Study', value: 'bible-study'},
          {title: 'Special Service', value: 'special'},
          {title: 'Outreach', value: 'outreach'},
          {title: 'Fellowship', value: 'fellowship'},
        ],
      },
    }),
    defineField({
      name: 'isPublic',
      title: 'Is Public Event',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'registrationRequired',
      title: 'Registration Required',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      hidden: ({document}) => !document?.registrationRequired,
    }),
    defineField({
      name: 'maxAttendees',
      title: 'Maximum Attendees',
      type: 'number',
      hidden: ({document}) => !document?.registrationRequired,
    }),
  ],
  orderings: [
    {
      title: 'Start Date (Newest First)',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
    {
      title: 'Start Date (Oldest First)',
      name: 'startDateAsc',
      by: [{field: 'startDate', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startDate',
      media: 'featuredImage',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date set',
      }
    },
  },
})