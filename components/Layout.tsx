import Head from 'next/head'
import Link from 'next/link'
import { memo } from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default memo(Layout)
