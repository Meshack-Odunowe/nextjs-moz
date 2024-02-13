// schemas/pet.js
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article'
    },
    {
      name: 'slug',
      type: 'slug',
      title: "Slug of your blog article",
      options: {
        source: 'title'
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title:'Title Image'
    }, {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }, {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },{
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'smallDescription',
      type: 'text',
      title:' Small Description'
    },
    {
      name: 'content',
      type: 'array',
      title:"Content",
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            { title: 'Quote', value: 'blockquote' },
            { title: 'Paragraph', value: 'paragraph' },
          ]
        },
        {
          type: 'image'
        },
        
       
      ]
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }],
      options: {
        layout: 'grid',
      },
    },

  ]
}