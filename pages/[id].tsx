import React, { memo } from 'react'
import Head from 'next/head'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css'
import { client } from '../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'

import { Article, ArticlesContents } from '../types/types'

type Props = {
  article: Article
  articles: ArticlesContents
}

const ArticleId: React.VFC<Props> = (props) => {
  const { article } = props
  // const $ = cheerio.load(article.content)
  console.log(article)
  const DynamicComponent = dynamic(
    () => import(`../articles/${article.component}/index`),
  )

  // $('pre code').each((_, elm) => {
  //   const result = hljs.highlightAuto($(elm).text())
  //   $(elm).html(result.value)
  //   $(elm).addClass('hljs')
  // })
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <main className="max-with mt-90 pb-40">
        <div>{article.title}</div>
        <div>{article.subtitle}</div>
        {/* <img src={article.thumbnail.url} alt={article.title} /> */}
        <DynamicComponent />
      </main>
    </>
  )
}
export default memo(ArticleId)

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: ArticlesContents = await client.get({ endpoint: 'articles' })
  const paths = articles.contents.map((content) => `/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const articles: Article[] = await client.get({ endpoint: 'articles' })
  const article = await client.get({
    endpoint: 'articles',
    contentId: id,
  })

  return {
    props: {
      article,
      articles,
    },
  }
}
