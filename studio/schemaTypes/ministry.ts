import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ministry Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
      name: 'leader',
      title: 'Ministry Leader',
      type: 'reference',
      to: [{type: 'staff'}],
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
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string',
      options: {
        list: [
          {title: 'Children (0-12)', value: 'children'},
          {title: 'Youth (13-18)', value: 'youth'},
          {title: 'Young Adults (19-30)', value: 'young-adults'},
          {title: 'Adults (31-65)', value: 'adults'},
          {title: 'Seniors (65+)', value: 'seniors'},
          {title: 'Families', value: 'families'},
          {title: 'All Ages', value: 'all-ages'},
        ],
      },
    }),
    defineField({
      name: 'meetingTime',
      title: 'Meeting Time',
      type: 'string',
    }),
    defineField({
      name: 'meetingLocation',
      title: 'Meeting Location',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'targetAudience',
      media: 'featuredImage',
    },
  },
})