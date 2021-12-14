import Link from 'next/link'
import React, { memo, useContext } from 'react'
import { ProductsList } from '../../../pages/index'

const MainProductsList = () => {
    const initProducts = useContext(ProductsList)
    const products = initProducts
    // console.log("ここ",products)

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
                                    {/* <Image src={thumbnail.url} alt={`${title}のサムネイル`} width={520} height={330}/> */}
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

export default memo(MainProductsList)
