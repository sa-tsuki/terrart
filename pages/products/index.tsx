import React, { memo } from 'react'
import Head from 'next/head'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css';
import { client } from '../../lib/client'
import { GetStaticProps } from 'next'

import { IndexProducts } from '../../components/orgs';

export const ProductsList = React.createContext([])
export const CategoryLists = React.createContext([])

const ProductsIndex = ({ products, categories }) => {
  return (
    <>
      <Head>
        <title>{`test`}</title>
      </Head>

      <ProductsList.Provider value={products}>
        <CategoryLists.Provider value={categories}>
          <IndexProducts />
        </CategoryLists.Provider>
      </ProductsList.Provider>
    </>
  )
}
export default memo(ProductsIndex)

//
export const getStaticProps: GetStaticProps = async () => {
  const products: {
    endpoint: string
  } = await client.get({
    endpoint: 'products'
  })
  const categories: {
    endpoint: string
  } = await client.get({
    endpoint: 'categories'
  })

  return {
    props: {
      products: products.contents,
      categories
    },
  }
}

