import { ca } from 'date-fns/locale'
import Link from 'next/link'
import React, { memo, useContext } from 'react'
import { CategoryLists } from '../../../pages/products/index'

const IndexProductsHead = () => {
    const initCategories = useContext(CategoryLists)
    const categories = initCategories
    console.log("カテゴリー",categories)
    return (
        <div className="products_head">
            <h2>Products</h2>
            <div className="categories_field">
                <ul>
                    {categories.contents.map((category, i) => {
                        return (
                            <li key={i} data-slug={category.slug}>{category.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default memo(IndexProductsHead)
