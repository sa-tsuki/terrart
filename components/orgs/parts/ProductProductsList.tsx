import Link from 'next/link'
import { memo } from 'react'

import { Product } from '../../../types/types'

type Props = {
  products: Product[]
}

const ProductProductsList: React.VFC<Props> = (props) => {
  const { products } = props

  return (
    <div className="body">
      <ul>
        <li className="spacerList"></li>
        {products.map((product, index) => {
          const { id, thumbnail, category, title, subtitle } = product
          return (
            <li key={index}>
              <Link href={`/products/${id}`}>
                <article>
                  <div>
                    <img src={thumbnail.url} alt={`${title}のサムネイル`} />
                  </div>
                  <div className="contents">
                    <div className="categories">{category.join(' / ')}</div>
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                  </div>
                </article>
              </Link>
            </li>
          )
        })}
        <li className="spacerList"></li>
      </ul>
    </div>
  )
}

export default memo(ProductProductsList)
