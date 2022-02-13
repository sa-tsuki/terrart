import Link from 'next/link'
import React, { memo } from 'react'

type Props = {
  text: string
  href: string
}

const Button: React.VFC<Props> = (props) => {
  const { text, href } = props
  return (
    <Link href={href}>
      <a className="link_button">{text}</a>
    </Link>
  )
}

export default memo(Button)
