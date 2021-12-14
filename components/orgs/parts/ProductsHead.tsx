import { ca } from 'date-fns/locale'
import Link from 'next/link'
import React, { memo, useContext } from 'react'
import { categoryLists } from '../../../pages'

const ProductsHead = () => {
    const initCategories = useContext(categoryLists)
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
