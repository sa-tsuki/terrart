import React, { memo } from 'react'
import Link from 'next/link'
import { ArticleType } from '../../types/types'

type Props = {
  article: ArticleType
}

const Article: React.VFC<Props> = (props) => {
  const { article } = props
  return (
    <Link key={article.id} href={`/${article.id}`}>
      <div className="w-card cursor-pointer group ">
        <div className="mb-1 border-solid border-gray-200 border transition duration-200 rounded-lg overflow-hidden md:group-hover:scale-105 group-hover:scale-100 aspect-video">
          <img
            src={
              article.thumbnail ? article.thumbnail.url : 'images/Mockup.jpg'
            }
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-sm font-bold ml-1 leading-tight">
          {article.title}
        </div>
      </div>
    </Link>
  )
}

export default memo(Article)
