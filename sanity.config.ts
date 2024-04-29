import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'agile-content',

  projectId: 'heq0maho',
  dataset: 'blogs',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
