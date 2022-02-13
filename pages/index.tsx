import React, { memo, useState } from 'react'
import { GetStaticProps } from 'next'
import { client } from '../lib/client'

import { Top, Main } from '../components/index'

import { ProductsContents, CategoriesContents } from '../types/types'

export const ProductsList = React.createContext([])
export const categoryLists = React.createContext([])

type Props = {
  products: ProductsContents
  categories: CategoriesContents
}

const Home: React.VFC<Props> = (props) => {
  const { products, categories } = props
  // const searchCategory = (category) => {
  //   if (category) {
  //     history.replaceState('', '', `/?category=category`)
  //     const categoriesArray = blog.map((result) => result.category)
  //     const lowerCaseCategories = categoriesArray.map((result) =>
  //       result.map((result) => result.toLowerCase()),
  //     )
  //     const pushLowerCaseCategories = blog.map(
  //       (result, index) =>
  //         (result.lowerCaseCategories = lowerCaseCategories[index]),
  //     )
  //     var searchBlogs = blog.filter((blog) =>
  //       blog.lowerCaseCategories.includes(category),
  //     )
  //   } else {
  //     history.replaceState('', '', '/')
  //     searchBlogs = blog
  //   }
  //   setBlogs(searchBlogs)
  //   const whatButton = document.querySelectorAll('button.category')
  //   for (let i = 0; i < whatButton.length; i++) {
  //     if (whatButton[i].name === category) {
  //       whatButton[i].classList.add('active')
  //     }
  //   }
  // }
  const [blogs, setBlogs] = useState<Props['products']>(products)

  // 初期読み込み時のURLを判断
  // useEffect(() => {
  //   const currentUrl = location.search
  //   const getCategoryName = currentUrl.replace('?category=', '')
  //   if (getCategoryName) {
  //     searchCategory(getCategoryName)
  //   }
  // }, [])

  // const activeCategory = (e) => {
  //   const category = document.querySelectorAll('.category')
  //   const target = e.target
  //   for (let i = 0; i < category.length; i++) {
  //     category[i].classList.remove('active')
  //   }
  //   target.classList.add('active')
  // }

  return (
    <>
      <Top />
      <ProductsList.Provider value={products.contents}>
        <categoryLists.Provider value={categories.contents}>
          <Main />
        </categoryLists.Provider>
      </ProductsList.Provider>
    </>
  )
}
export default memo(Home)

export const getStaticProps: GetStaticProps = async () => {
  const products: ProductsContents = await client.get({ endpoint: 'products' })
  const categories: CategoriesContents = await client.get({
    endpoint: 'categories',
  })

  return {
    props: {
      products,
      categories,
    },
  }
}
