import Head from 'next/head'
import Link from 'next/link'
import { memo } from 'react'

type Props = {
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = (props) => {
  const { children } = props
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default memo(Layout)
