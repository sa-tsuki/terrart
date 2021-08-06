import React, { useState } from 'react'
import {ArticleCard} from './index'
import articleCardsStyles from '../../../styles/articleCards.module.css'

const ArticleCards = (props) => {
    const {blog} = props

    return (
        <ul className={`${articleCardsStyles.ul}`}>
            {blog.map(
            ({
              id,
              title,
              subtitle,
              category,
              content,
              thumbnail,
              createdAt,
            }) => {
              const categories = category.join(' / ')
              return (
                  <ArticleCard
                    href={`/articles/${id}`}
                    src={thumbnail.url}
                    alt={`${title}のサムネイル画像`}
                    width="100%"
                    text_j_xs={categories}
                    text_j_l={title}
                    text_j_s={subtitle}
                    key={id}
                  />
              )
            },
          )}
        </ul>
    )
}
export default ArticleCards
