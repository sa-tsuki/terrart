import React, { useEffect, useState } from 'react'
import utilsStyles from '../../styles/utils.module.css'
import topStyles from '../../styles/top.module.css'
import { ArticleCards, FirstView } from './molecules'
import { FunctionButton, Video } from './molecules/atoms'

const Top = (props) => {
  const { blog } = props

  const searchCategory = (category) => {
    if (category) {
      history.replaceState('', '', `/?category=${category}`)
      const categoriesArray = blog.map((result) => result.category)
      const lowerCaseCategories = categoriesArray.map((result) =>
        result.map((result) => result.toLowerCase()),
      )
      const pushLowerCaseCategories = blog.map(
        (result, index) =>
          (result.lowerCaseCategories = lowerCaseCategories[index]),
      )
      var searchBlogs = blog.filter((blog) =>
        blog.lowerCaseCategories.includes(category),
      )
    } else {
      history.replaceState('', '', '/')
      searchBlogs = blog
    }
    setBlogs(searchBlogs)
    const whatButton = document.querySelectorAll('button.category')
    for (let i = 0; i < whatButton.length; i++) {
      if (whatButton[i].name === category) {
        whatButton[i].classList.add('active')
      }
    }
  }
  const [blogs, setBlogs] = useState(blog)

  // 初期読み込み時のURLを判断
  useEffect(() => {
    const currentUrl = location.search
    const getCategoryName = currentUrl.replace('?category=', '')
    if (getCategoryName) {
      searchCategory(getCategoryName)
    }
  }, [])

  const activeCategory = (e) => {
    const category = document.querySelectorAll('.category')
    const target = e.target
    for (let i = 0; i < category.length; i++) {
      category[i].classList.remove('active')
    }
    target.classList.add('active')
  }

  const categories = [
    { category: 'React', name: 'react' },
    { category: 'Next', name: 'next' },
    { category: 'Javascript', name: 'javascript' },
    { category: 'XD', name: 'xd' },
    { category: 'Figma', name: 'figma' },
    { category: 'UI', name: 'ui' },
    { category: 'UX', name: 'ux' },
    { category: 'HTML', name: 'html' },
    { category: 'CSS', name: 'css' },
  ]

  return (
    <>
      {/* <FirstView /> */}
      <Video />
      <section className={topStyles.section}>
        <h2 className={`${utilsStyles.fontset_e_l} ${topStyles.h2}`}>
          Articles
        </h2>
        <div className={`${topStyles.buttons_box} category_box`}>
          <button
            onClick={(e) => {
              searchCategory('')
              activeCategory(e)
            }}
            className={`category ${topStyles.fontset_e_s}`}
            name="all"
          >
            All
          </button>
          {categories.map((res) => {
            return (
              <button
                onClick={(e) => {
                  searchCategory(res.name)
                  activeCategory(e)
                }}
                key={res.category}
                className={`category ${topStyles.fontset_e_s}`}
                name={res.name}
              >
                {res.category}
              </button>
            )
          })}
        </div>
        <ArticleCards blog={blogs} />
        <FunctionButton text={'VIEW MORE'} />
      </section>
    </>
  )
}
export default Top
