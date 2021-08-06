import React from 'react'
import Head from 'next/head'
import { client } from '../lib/client'
import { Top } from '../templates/organisms'

const Home = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{'テストタイトル'}</title>
      </Head>
      <Top blog={blog} />
    </>
  )
}
export default Home

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'articles' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
