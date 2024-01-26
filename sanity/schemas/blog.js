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
          type:'block'
        }
      ]
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   // type: 'reference',
    //   // to: {type: 'author'},
    // }

  ]
}