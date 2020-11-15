/* eslint-disable camelcase */
import { RichTextBlock } from "prismic-reactjs"

// COMMON
interface Document {
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

// Types

export interface Opinion {
  image: Image
  name: string
  text: RichTextBlock[]
  stars: number
}
export interface Medio {
  image: Image
  text: string
  link: { url: string }
}
export interface Garantia {
  icon: Image
  title: string
  text: RichTextBlock[]
}

// Post
export interface Home extends Document {
  medios: Medio[]
  garantias: Garantia[]
  opiniones: Opinion[]
}
