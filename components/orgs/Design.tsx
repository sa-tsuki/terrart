import React, { memo, useEffect } from 'react'
import dayjs from 'dayjs'
import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css'

import { ArticleType } from '../../types/types'
import { BlankIcon } from '../atoms'

type Props = {
  article: ArticleType
}

const Design: React.VFC<Props> = (props) => {
  const { article } = props

  const formatedDate = () => {
    const date = dayjs(article.updatedAt)
    return date.format('YYYY.MM.DD')
  }

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <div className="mb-20 max-w-screen-md mx-auto">
        <div className="mb-2">
          <div className="text-xl font-bold">{article.title}</div>
          {article.subtitle && (
            <div className="-mt-1 ml-1 font-bold">{article.subtitle}</div>
          )}
        </div>
        {article.github && (
          <div className="ml-1">
            <a
              className="text-base text-gray-400 font-bold inline-flex gap-2 transition duration-200 hover:text-gray-900"
              href={`https://github.com/sa-tsuki/${article.github}`}
              target="_blank"
              rel="noreferrer"
            >
              Github
              <BlankIcon width={12} />
            </a>
          </div>
        )}
        <div className="ml-1 text-xs text-gray-400 font-bold">
          {formatedDate()}
        </div>
      </div>
      <div
        className="max-w-screen-md mx-auto main__contents"
        dangerouslySetInnerHTML={{
          __html: `${article.content}`,
        }}
      />
    </>
  )
}

export default memo(Design)
