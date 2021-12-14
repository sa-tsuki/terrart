import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter } from './orgs/parts'

const Header = () => {

    const pages = ['Products', 'Contact']

    return (
        <header>
                <div className={`logo`}>
                    <Link href={'/'}>
                        TERRART
                        {/* <img src="" alt="TERRART トップページ"/> */}
                    </Link>
                </div>
                <div className={`pages`}>
                    {pages.map((res,index) => {
                        const lowerCasePage = res.toLowerCase()
                        return (
                            <span key={index}>
                                <Link href={`/${lowerCasePage}`} >{res}</Link>
                            </span>
                        )
                    })}
                </div>
                <div className="icon">
                    <Twitter />
                    <Github />
                </div>
        </header>
    )
}
export default memo(Header)
