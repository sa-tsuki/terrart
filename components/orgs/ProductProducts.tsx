import React, { memo } from 'react'
import { ProductProductsList, SingleProductsHead } from './parts'
import { Product } from '../../types/types'

type Props = {
  products: Product[]
}

const ProductProducts: React.VFC<Props> = (props) => {
  const { products } = props
  return (
    <div className="main_products">
      <SingleProductsHead />
      <ProductProductsList products={products} />
    </div>
  )
}

export default memo(ProductProducts)
