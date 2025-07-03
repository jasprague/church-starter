import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'churchInfo',
  title: 'Church Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Church Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'street', title: 'Street Address', type: 'string'},
        {name: 'city', title: 'City', type: 'string'},
        {name: 'state', title: 'State', type: 'string'},
        {name: 'zipCode', title: 'ZIP Code', type: 'string'},
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'phone', title: 'Phone', type: 'string'},
        {name: 'email', title: 'Email', type: 'email'},
        {name: 'website', title: 'Website', type: 'url'},
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook URL', type: 'url'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
        {name: 'youtube', title: 'YouTube URL', type: 'url'},
        {name: 'twitter', title: 'Twitter URL', type: 'url'},
      ],
    }),
    defineField({
      name: 'theme',
      title: 'Website Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Classic', value: 'classic'},
          {title: 'Modern', value: 'modern'},
          {title: 'Minimal', value: 'minimal'},
          {title: 'Traditional', value: 'traditional'},
        ],
      },
      initialValue: 'classic',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
})