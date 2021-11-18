import Head from 'next/head'
import Link from 'next/link'

export const Archive = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Archive
