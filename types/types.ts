export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  slug: string
}

export type Product = {
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
  category: string[]
  content: string
  categories: Category[]
}

export type ProductsContents = {
  contents: Product[]
}

export type CategoriesContents = {
  contents: Category[]
}
