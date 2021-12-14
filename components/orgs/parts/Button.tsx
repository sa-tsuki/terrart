import Link from 'next/link'
import React, { memo } from 'react'

const Button = (props) => {
    const { text, href } = props
    return (
        <Link href={href}><a className="link_button">{text}</a></Link>
    )
}

export default memo(Button)
