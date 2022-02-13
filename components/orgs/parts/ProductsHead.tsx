import { ca } from 'date-fns/locale'
import Link from 'next/link'
import React, { memo, useContext } from 'react'
import { categoryLists } from '../../../pages'
import { Category } from '../../../types/types'

const ProductsHead: React.VFC = () => {
  const initCategories = useContext<Category[]>(categoryLists)
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
        <Link href="/products/">
          <a>
            <span>View All</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default memo(ProductsHead)
