import Link from 'next/link'
import React from 'react'
import { Breadcrumb } from './index'
import { FooterBottom } from './orgs'

const Footer = () => {

    const pages = ['About', 'Contact']

    return (
        <>
            <Breadcrumb />
            <footer>
                <div className="contents">
                    <div className="logo">
                        <Link href={'/'}>
                            TERRART
                            {/* <img src="" alt="TERRART トップページ"/> */}
                        </Link>
                    </div>
                    <div className="pages">
                    {pages.map((res,index) => {
                        const lowerCasePage = res.toLowerCase()
                        return (
                            <span key={index}>
                                <Link href={`/${lowerCasePage}`} >{res}</Link>
                            </span>
                        )
                    })}
                    </div>
                    <FooterBottom />
                </div>
            </footer>
        </>
    )
}
export default Footer
