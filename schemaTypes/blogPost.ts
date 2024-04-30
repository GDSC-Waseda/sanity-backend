import {defineType} from 'sanity'

const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {name: 'publishedAt', title: 'Published at', type: 'datetime'},
    {name: 'minRead', title: 'Minutes Read', type: 'number'},
    {name: 'mainImage', title: 'MainImage', type: 'image', options: {hotspot: true}},
    {name: 'secondImage', title: 'SecondImage', type: 'image', options: {hotspot: true}},
    {name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]},
    {name: 'shortDesc', title: 'ShortDescription', type: 'string'},
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'member'}],
    },
    {name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}]},
  ],
})

export default blogPost
