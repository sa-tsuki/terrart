import React, { memo } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { client } from '../lib/client'
import { ArticlesContents, CategoriesContents, Article } from '../types/types'

export const ArticlesList = React.createContext<Article[]>([])

type Props = {
  articles: ArticlesContents
  categories: CategoriesContents
}

const Home: React.VFC<Props> = (props) => {
  const { articles, categories } = props

  return (
    <>
      <ArticlesList.Provider value={articles.contents}>
        <main className="max-width mt-90 pb-40">
          {categories.contents.map((category, index) => {
            return (
              <section
                key={category.category_name}
                className={`${index !== 0 ? 'mt-20' : ''}`}
              >
                <div className="text-xl font-bold mb-2">
                  {category.category_name}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-8">
                  {articles.contents.map((article) => {
                    if (
                      category.category_slug === article.category.category_slug
                    ) {
                      return (
                        <Link key={article.id} href={`/${article.id}`}>
                          <div className="w-card cursor-pointer group ">
                            <div className="mb-1 group-hover:scale-105 border-solid border-gray-200 border transition duration-200 rounded-lg overflow-hidden">
                              <img
                                src={
                                  article.thumbnail.url
                                    ? article.thumbnail.url
                                    : 'images/img.gif'
                                }
                                alt={article.title}
                                className=" object-cover"
                              />
                            </div>
                            <div className="text-sm font-bold ml-1 leading-tight">
                              {article.title}
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  })}
                </div>
              </section>
            )
          })}
        </main>
        <div className="bg-darkGrey ">
          <div className="max-width flex items-center gap-x-10 h-10">
            <Link href="/">
              <span className="relative text-base text-gray-400 font-semibold cursor-pointer transition duration-200 hover:text-gray-100 before:text-gray-400 before:absolute before:content-['-'] before:text-grey-50 before:top-1/2 before:-right-5 before:-translate-y-1/2 before:pointer-events-none">
                Home
              </span>
            </Link>

            <Link href="/">
              <span className="relative text-base text-gray-400 font-semibold cursor-pointer transition duration-200 hover:text-gray-100 before:text-gray-400 before:absolute before:content-['-'] before:text-grey-50 before:top-1/2 before:-right-5 before:-translate-y-1/2 before:pointer-events-none">
                Home
              </span>
            </Link>

            <span className="text-base text-gray-50 font-semibold">Home</span>
          </div>
        </div>
      </ArticlesList.Provider>
    </>
  )
}
export default memo(Home)

export const getStaticProps: GetStaticProps = async () => {
  const articles: ArticlesContents = await client.get({ endpoint: 'articles' })
  const categories: CategoriesContents = await client.get({
    endpoint: 'categories',
  })

  return {
    props: {
      articles,
      categories,
    },
  }
}
