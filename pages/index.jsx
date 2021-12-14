import React, { memo, useState } from 'react'
import { client } from '../lib/client'
import { Top, Main } from '../components/index'

export const ProductsList = React.createContext([])
export const categoryLists = React.createContext([])

const Home = ({ products, categories }) => {

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
  const [blogs, setBlogs] = useState(products)

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
      <ProductsList.Provider value={products}>
        <categoryLists.Provider value={categories}>
          <Main />
        </categoryLists.Provider>
      </ProductsList.Provider>
    </>
  )
}
export default memo(Home)

export const getStaticProps = async () => {
  const products = await client.get({ endpoint: 'products' })
  const categories = await client.get({ endpoint: 'categories' })

  return {
    props: {
      products: products.contents,
      categories
    },
  }
}
