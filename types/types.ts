export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  category_name: string
  category_slug: string
}

export type ArticleType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  subtitle: string
  thumbnail: {
    url: string
    height: number
    width: number
  }
  category: Category
  content: string
  component: string
  fullwidth: boolean
  github: string
}

export type ArticlesContents = {
  contents: ArticleType[]
  totalCount: number
  offset: number
  limit: number
}

export type CategoriesContents = {
  contents: Category[]
  totalCount: number
  offset: number
  limit: number
}
