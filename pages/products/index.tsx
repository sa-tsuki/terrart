import Head from 'next/head'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css';
import { client } from '../../lib/client'
import { GetStaticProps, GetStaticPaths } from 'next'

import Date from '../../components/date'
import Link from 'next/link';

export default function Post({ blogs }) {
    console.log(blogs)
  return (
    <>
      <Head>
        <title>{blogs.title}</title>
      </Head>
      <section id="product">
        Product
        {blogs.map((blog, index) => {
            return (
                <Link href={`/products/${blog.id}`} key={index}>クリック</Link>
            )
        })}
      </section>
    </>
  )
}

//
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: {
    endpoint: string
  } = await client.get({
    endpoint: 'products'
  })

  return {
    props: {
      blogs: data.contents,
    },
  }
}

