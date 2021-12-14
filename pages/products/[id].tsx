import React, { memo } from 'react'
import Head from 'next/head'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css';
import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'

import { colorBrewer } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { ProductProducts, SingleProduct } from '../../components/orgs';
import { Space80 } from '../../components/Space'

const ProductId = ({ product, products, categories }) => {

  // console.log(products.contents.categories)
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
            <ProductProducts products={products.contents} categories={categories}/>
        </div>
      </section>
    </>
  )
}
export default memo(ProductId)

// 記事のパスを作成：[id]に代入される
export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.get({ endpoint: 'products' })
  const paths = data.contents.map((content) => `/products/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

//
export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params.id
  const products = await client.get({ endpoint: 'products' })
  const categories = await client.get({ endpoint: 'categories' })
  const product: {
    endpoint: string
    contentId: string
  } = await client.get({
    endpoint: 'products',
    contentId: id,
  })

  return {
    props: {
      product,
      products,
      categories
    },
  }
}

