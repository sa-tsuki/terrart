import Head from 'next/head'
import Link from 'next/link'

const name = 'Satsuki'
export const siteTitle = 'Next.js Sample Website'

export const Archive = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Archive
