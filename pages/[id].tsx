import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { memo } from 'react'

import { Component, Design } from '../components/orgs'
import { client } from '../lib/client'
import { ArticleType, ArticlesContents } from '../types/types'

type Props = {
  article: ArticleType
  articles: ArticlesContents
}

const ArticleId: React.VFC<Props> = (props) => {
  const { article } = props

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="fixed md:top-25 top-14 left-0 flex items-center gap-x-10 h-10 sm:px-8 px-4">
        <Link href="/">
          <span className="relative md:text-base text-xs text-gray-400 font-semibold cursor-pointer transition duration-200 hover:text-gray-700 before:text-gray-400 before:absolute before:content-['-'] before:text-grey-50 before:top-1/2 before:-right-5 before:-translate-y-1/2 before:pointer-events-none">
            Home
          </span>
        </Link>
        <span className="md:text-base text-xs text-gray-700 font-semibold">
          {article.title}
        </span>
      </div>
      <main className="max-width md:mt-64 mt-40 pb-40">
        {article.component ? (
          <Component article={article} />
        ) : (
          <Design article={article} />
        )}
      </main>
      <div className="bg-darkGrey ">
        <div className="max-width flex items-center gap-x-10 h-10">
          <Link href="/">
            <span className="relative md:text-base text-xs text-gray-400 font-semibold cursor-pointer transition duration-200 hover:text-gray-100 before:text-gray-400 before:absolute before:content-['-'] before:text-grey-50 before:top-1/2 before:-right-5 before:-translate-y-1/2 before:pointer-events-none">
              Home
            </span>
          </Link>
          <span className="md:text-base text-xs text-gray-50 font-semibold">
            {article.title}
          </span>
        </div>
      </div>
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
  const articles: ArticleType[] = await client.get({ endpoint: 'articles' })
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
