import { ca } from 'date-fns/locale'
import React, { memo, useContext } from 'react'

import { CategoryLists } from '../../../pages/products/index'
import { Category } from '../../../types/types'

const IndexProductsHead: React.VFC = () => {
  const initCategories = useContext<Category[]>(CategoryLists)
  const categories = initCategories

  return (
    <div className="products_head">
      <h2>Products</h2>
      <div className="categories_field">
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.name} data-slug={category.slug}>
                {category.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default memo(IndexProductsHead)
