import { memo, useEffect, useState } from 'react'

const Top = memo((props) => {
  const { blog } = props

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
  const [blogs, setBlogs] = useState(blog)

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
      <section id="top">
        <div className="copy">
          <span>
            創る、そして想いに応える
          </span>
          <h1>
            <span>Create it</span>
            <span>by Devel<span className="accent">o</span>ping</span>
          </h1>
        </div>
      </section>
    </>
  )
})
export default Top
