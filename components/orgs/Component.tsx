import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import dayjs from 'dayjs'

import { ArticleType } from '../../types/types'
import { BlankIcon } from '../atoms'

type Props = {
  article: ArticleType
}

const Component: React.VFC<Props> = (props) => {
  const { article } = props

  const formatedDate = () => {
    const date = dayjs(article.updatedAt)
    return date.format('YYYY.MM.DD')
  }

  const DynamicComponent = dynamic(
    () => import(`../../articles/${article.component}/index`),
    { ssr: false },
  )
  return (
    <>
      <div className="mb-20">
        <div className="mb-2">
          <div className="text-xl font-bold">{article.title}</div>
          {article.subtitle && (
            <div className="-mt-1 ml-1 font-bold">{article.subtitle}</div>
          )}
        </div>
        {article.github && (
          <div className="ml-1">
            <a
              className="text-base text-stone-400 font-bold inline-flex gap-2 transition duration-200 hover:text-stone-900"
              href={`https://github.com/sa-tsuki/${article.github}`}
              target="_blank"
              rel="noreferrer"
            >
              Github
              <BlankIcon width={12} />
            </a>
          </div>
        )}
        <div className="ml-1 text-xs text-stone-400 font-bold">
          {formatedDate()}
        </div>
      </div>
      <div className="bg-conponent">
        <DynamicComponent />
      </div>
    </>
  )
}

export default memo(Component)
