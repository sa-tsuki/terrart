import Head from 'next/head'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css';
import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'

import Date from '../../components/date'

export default function Post({
  blog
}: {
  blog: {
    id: string
    createdAt: any
    updatedAt: any
    publishedAt: any
    revisedAt: any
    title: string
    subtitle: string
    thumbnail: {
      url: string
      height: number
      width: number
    }
    category?: []
    content: string
  },highlightedBody:string
}) {
  const categories = blog.category.join(' / ')
  const $ = cheerio.load(blog.content)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <section id="product">
        Product
      </section>
    </>
  )
}

// 記事のパスを作成：[id]に代入される
export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: 'products' })
  const paths = data.contents.map((content) => `/products/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

//
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: any = params.id
  const data: {
    endpoint: string
    contentId: string
  } = await client.get({
    endpoint: 'products',
    contentId: id,
  })

  return {
    props: {
      blog: data,
    },
  }
}

