import React, { memo } from 'react'
import { GetStaticProps } from 'next'

import { client } from '../lib/client'
import {
  ArticlesContents,
  CategoriesContents,
  ArticleType,
} from '../types/types'
import { Article, NotReady } from '../components/moles'

export const ArticlesList = React.createContext<ArticleType[]>([])

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
                  {articles.contents.some(
                    (aritcle) =>
                      aritcle.category.category_slug === category.category_slug,
                  ) ? (
                    articles.contents.map((article) => {
                      if (
                        category.category_slug ===
                        article.category.category_slug
                      ) {
                        return <Article article={article} key={article.title} />
                      }
                    })
                  ) : (
                    <NotReady />
                  )}
                </div>
              </section>
            )
          })}
        </main>
        <div className="bg-darkGrey ">
          <div className="max-width flex items-center gap-x-10 h-10">
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
