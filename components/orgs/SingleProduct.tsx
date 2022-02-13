import React, { memo } from 'react'
import Date from '../date'

import { Button } from './parts'

import { Product } from '../../types/types'

type Props = {
  product: Product
}

const SingleProduct: React.VFC<Props> = (props) => {
  const { product } = props
  const haveCats = product.categories.map((category) => category.name)
  const categories = haveCats.join(' / ')

  return (
    <>
      <div>
        <h1>{product.title}</h1>
        <div className="subtitle">{product.subtitle}</div>
        <div className="categories">{categories}</div>
        <Date date={product.updatedAt}></Date>
        <div className="breadcrumb">
          <span className="material-icons">location_on</span>
        </div>
      </div>
      <div>
        <img className="thumbnail" src={product.thumbnail.url} />
      </div>
      <div className="button-wrap">
        <Button text={`OTHER PRODUCTS`} href={`/products/`} />
      </div>
    </>
  )
}

export default memo(SingleProduct)
