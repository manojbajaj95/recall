// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import { rehypePlugins } from "./components/mdx/rehype.mjs"
import { remarkPlugins } from "./components/mdx/remark.mjs"

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blog/${post._raw.sourceFileName}` },
    slug: { type: 'string', resolve: (post) => post._raw.sourceFileName },
  },
  contentType: 'mdx',
  mdx: {
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
  },
}))

export const Change = defineDocumentType(() => ({
  name: 'Change',
  filePathPattern: `changelog/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    version: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/changelog/${post._raw.sourceFileName}` },
    slug: { type: 'string', resolve: (post) => post._raw.sourceFileName },
  },
  contentType: 'mdx',
  mdx: {
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
  },
}))

export default makeSource({ contentDirPath: 'content/', documentTypes: [Blog, Change] })
