import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Code', value: 'code' }, // New style for code
        { title: 'Bullet List', value: 'bulletList' }, // New style for bullet list
        { title: 'Numbered List', value: 'numberedList' }, // New style for numbered list
        { title: 'Divider', value: 'hr' }, // New style for horizontal rule
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }, // New list type for numbered list
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' }, // New mark for underline
          { title: 'Strike-through', value: 'strike-through' }, // New mark for strike-through
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
