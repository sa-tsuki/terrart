import React, { memo } from 'react'
import { IndexProductsList, IndexProductsHead } from './parts'

const IndexProducts: React.VFC = () => {
  return (
    <section id="products">
      <div className="max-width">
        <div className="index_products">
          <IndexProductsHead />
          <IndexProductsList />
        </div>
      </div>
    </section>
  )
}

export default memo(IndexProducts)
