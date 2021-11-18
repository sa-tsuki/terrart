import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    const pages = ['About', 'Contact']

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
        </header>
    )
}
export default Header
