import Link from 'next/link'
import React from 'react'
import Bread from './Bread'
import Github from './parts/Github'
import Twitter from './parts/Twitter'

const Footer = () => {

    const pages = ['About', 'Contact']

    return (
        <>
            <Bread />
            <footer>
                <div className="content">
                    <div className="logo">
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
                    <div>
                        <Twitter />
                        {/* <Github /> */}
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
