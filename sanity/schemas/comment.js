// In sanity/schemas/comment.js
export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'body',
      title: 'Comment Body',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blogPost',
      title: 'Related Blog Post',
      type: 'reference',
      to: [{ type: 'blog' }], // Reference to the blog post
    },
  ],
};
