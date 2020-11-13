/* eslint-disable camelcase */

// COMMON
export interface Document {
  _meta: {
    uid: string
    firstPublicationDate: string
    lastPublicationDate: string
    tags: string[]
  }
}

interface Image {
  dimensions: {
    width: number
    height: number
  }
  alt: string
  url: string
  copyright: string
}

// Prismic Models

// Post
export interface Post extends Document {
  title: string
  description: string
  image?: Image
  keywords?: string
  content?: [any]
  postdate: string
}
