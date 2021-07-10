import Layout from '../../templates/layout'
import Head from 'next/head'
import Date from '../../templates/date'
import { blogs } from "../../lib/blogs"
import { GetStaticProps, GetStaticPaths } from 'next'

import { Archive } from '../../templates/archive'

export default function Post({
  blog
}: {
  blog: {
    id: string,
    createdAt: any,
    updatedAt: any,
    publishedAt: any,
    revisedAt: any,
    title: string,
    subtitle: string,
    thumbnail: {
      url: string,
      height: number,
      width: number
    },
    category?: [],
    content: string
  }
}) {

  return (
    <Archive>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article>
        <h1>{blog.title}</h1>
        <div>
          {blog.createdAt}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </Archive>
  )
}

// 記事のパスを作成：[id]に代入される
export const getStaticPaths: GetStaticPaths = async () => {
  const data:any = await blogs.get({ endpoint: "articles" });
  console.log(data)
  const paths = data.contents.map(content => `/articles/${content.id}`)
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}


// 
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: any = params.id
  const data:{
    endpoint: string,
    contentId: string
  } = await blogs.get({
    endpoint: "articles",
    contentId: id
  });

  return {
    props: {
      blog: data
    }
  }
}

