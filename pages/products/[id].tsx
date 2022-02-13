import React, { memo } from 'react'
import Head from 'next/head'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css'
import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'

import { colorBrewer } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { ProductProducts, SingleProduct } from '../../components/orgs'
import { Space80 } from '../../components/Space'
import {
  CategoriesContents,
  Category,
  Product,
  ProductsContents,
} from '../../types/types'

type Props = {
  product: Product
  products: ProductsContents
  categories: CategoriesContents
}

const ProductId: React.VFC<Props> = (props) => {
  const { product, products, categories } = props
  const $ = cheerio.load(product.content)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <section id="product">
        <div className="max-width">
          <SingleProduct product={product} />
          <Space80 />
          <ProductProducts
            products={products.contents}
            categories={categories}
          />
        </div>
      </section>
    </>
  )
}
export default memo(ProductId)

export const getStaticPaths: GetStaticPaths = async () => {
  const products: ProductsContents = await client.get({ endpoint: 'products' })
  const paths = products.contents.map((content) => `/products/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params.id
  const products: Product[] = await client.get({ endpoint: 'products' })
  const categories: Category = await client.get({ endpoint: 'categories' })
  const product: Product = await client.get({
    endpoint: 'products',
    contentId: id,
  })

  return {
    props: {
      product,
      products,
      categories,
    },
  }
}
