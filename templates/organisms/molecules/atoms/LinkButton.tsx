import Link from 'next/link'
import React from 'react'
import utilsStyles from '../../../../styles/utils.module.css'

const LinkButton = (props: { text: string, href?: any }) => {
  const { text, href } = props
  return (
    <Link href={href}>
      <a className={`${utilsStyles.main_button} ${utilsStyles.accent_shadow}`}>{text}</a>
    </Link>
  )
}
export default LinkButton
