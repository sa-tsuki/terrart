import Head from 'next/head'
import styled from 'styled-components'
import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'

// import { Archive } from '../../templates/archive'
// import idStyles from '../../styles/id.module.css'
import '../../styles/id.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Date from '../../templates/date'
import { Thumbnail } from '../../templates/organisms/molecules/atoms'

export default function Post({
  blog,
}: {
  blog: {
    id: string
    createdAt: any
    updatedAt: any
    publishedAt: any
    revisedAt: any
    title: string
    subtitle: string
    thumbnail: {
      url: string
      height: number
      width: number
    }
    category?: []
    content: string
  }
}) {
  const categories = blog.category.join(' / ')
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article className={`id_article`}>
        <h1 className={`${utilsStyles.fontset_e_l}`}>{blog.title}</h1>
        <div className={`${utilsStyles.fontset_e_s} subtitle`}>{blog.subtitle}</div>
        <div className={`${utilsStyles.fontset_e_xs} categories`}>{categories}</div>
        <Date date={blog.createdAt} />
        <Thumbnail
          src={blog.thumbnail.url}
          alt={`${blog.title}のサムネイル`}
          width={'100%'}
        />
        <div className={`content`} dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </>
  )
}

// 記事のパスを作成：[id]に代入される
export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.get({ endpoint: 'articles' })
  const paths = data.contents.map((content) => `/articles/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

//
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: any = params.id
  const data: {
    endpoint: string
    contentId: string
  } = await client.get({
    endpoint: 'articles',
    contentId: id,
  })

  return {
    props: {
      blog: data,
    },
  }
}
