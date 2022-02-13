import Link from 'next/link'
import React, { memo } from 'react'

const SingleProductsHead: React.VFC = () => {
  return (
    <div className="products_head">
      <h2>Products</h2>
      <div className="categories_field">
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

export default memo(SingleProductsHead)
