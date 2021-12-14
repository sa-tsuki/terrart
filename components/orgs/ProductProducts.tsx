import React, { memo } from 'react'
import { ProductProductsList, SingleProductsHead } from './parts'

const ProductProducts = (props) => {
    const { products, categories } = props
    return (
        <div className="main_products">
            <SingleProductsHead categories={categories}/>
            <ProductProductsList products={products}/>
        </div>
    )
}

export default memo(ProductProducts)
