import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'dayOfWeek',
      title: 'Day of Week',
      type: 'string',
      options: {
        list: [
          {title: 'Sunday', value: 'sunday'},
          {title: 'Monday', value: 'monday'},
          {title: 'Tuesday', value: 'tuesday'},
          {title: 'Wednesday', value: 'wednesday'},
          {title: 'Thursday', value: 'thursday'},
          {title: 'Friday', value: 'friday'},
          {title: 'Saturday', value: 'saturday'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Service Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'isRecurring',
      title: 'Is Recurring',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'livestreamUrl',
      title: 'Livestream URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Day of Week',
      name: 'dayOfWeek',
      by: [{field: 'dayOfWeek', direction: 'asc'}],
    },
    {
      title: 'Display Order',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'dayOfWeek',
      time: 'time',
    },
    prepare(selection) {
      const {title, subtitle, time} = selection
      return {
        title,
        subtitle: `${subtitle} at ${time}`,
      }
    },
  },
})