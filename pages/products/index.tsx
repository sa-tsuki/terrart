import React, { memo } from 'react'
import Head from 'next/head'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css'
import { client } from '../../lib/client'
import { GetStaticProps } from 'next'

import { IndexProducts } from '../../components/orgs'
import {
  ProductsContents,
  CategoriesContents,
  Product,
  Category,
} from '../../types/types'

export const ProductsList = React.createContext<Product[]>([])
export const CategoryLists = React.createContext<Category[]>([])

type Props = {
  products: ProductsContents
  categories: CategoriesContents
}

const ProductsIndex: React.VFC<Props> = (props) => {
  const { products, categories } = props
  return (
    <>
      <Head>
        <title>{`test`}</title>
      </Head>

      <ProductsList.Provider value={products.contents}>
        <CategoryLists.Provider value={categories.contents}>
          <IndexProducts />
        </CategoryLists.Provider>
      </ProductsList.Provider>
    </>
  )
}
export default memo(ProductsIndex)

//
export const getStaticProps: GetStaticProps = async () => {
  const products: ProductsContents = await client.get({
    endpoint: 'products',
  })
  const categories: CategoriesContents = await client.get({
    endpoint: 'categories',
  })

  return {
    props: {
      products,
      categories,
    },
  }
}
