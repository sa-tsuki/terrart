import React,{ useState, useEffect, useMemo } from 'react'
import Head from "next/head"
import Layout, { siteTitle } from "../templates/layout"
import { blogs } from "../lib/blogs"
import Link from "next/link"

import { MainButton } from '../templates/organisms/molecules/atoms/MainButton'

export default function Home({blog}) {
	const searchCategory = (category) => {

		if(category){
			history.replaceState('','',`/?category=${category}`)
			const categoriesArray = blog.map(result => result.category)
			const lowerCaseCategoriesArray = categoriesArray.map(result => result.map(result => result.toLowerCase()))
			const blogsForSearch = blog.filter((result,index) => result.category = lowerCaseCategoriesArray[index])
			var searchBlogs = blogsForSearch.filter(blog => blog.category.includes(category))
			console.log(searchBlogs)
		} else {
			history.replaceState('','','/')
			var searchBlogs = blog
		}
		setBlogs(searchBlogs)
	}

	const [blogs, setBlogs] = useState(blog)
	const [num, setNum] = useState(0)

	// 初期読み込み時のURLを判断
	useEffect(() => {
		const currentUrl = location.search
		const getCategoryName = currentUrl.replace('?category=', '')
		if(getCategoryName){
			searchCategory(getCategoryName)
		}
	}, [])

	return (
		<Layout home>
			<Head>
				<title>{blog.title}</title>
			</Head>
			<section>
				<button onClick={() => searchCategory()}>全て</button>
				<br />
				<button onClick={() => searchCategory('xd')}>XDカテゴリーページ</button>
				<br />
				<button onClick={() => searchCategory('react')}>Reactカテゴリーページ</button>
				<br />
				<button onClick={() => searchCategory('next')}>Nextカテゴリーページ</button>
				<p>[Your Self Introduction]</p>
				<button onClick={() => setNum(num + 1)}>{num}</button>
				<p>
					(This is a sample website - you’ll be building a site like this in{" "}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
			<section>
				<MainButton text="VIEW MORE"/>
			</section>
			<section>
				<h2>Blog</h2>
				<ul>
					{blogs.map(
						({ id, date, title, category, content, thumbnail, createdAt }) => (
							<li key={id}>
								<Link href={`/articles/${id}`}>
									<a>{title}</a>
								</Link>
								<img
									src={thumbnail.url}
									width={240}
									height={135}
									style={{ display: "block" }}
								/>
								{/* <br />
								<div dangerouslySetInnerHTML={{ __html: content }} /> */}
								<br />
								{category}
								<br />
								<small>
									{blog.createdAt}
									<p>{createdAt}</p>
								</small>
							</li>
						)
					)}
				</ul>
			</section>
		</Layout>
	)
}

export const getStaticProps = async () => {
	const data = await blogs.get({ endpoint: "articles" });

  return {
    props: {
      blog: data.contents,
    },
  };
}
