import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../../../styles/header.module.css'
import UtilsStyle from '../../../styles/utils.module.css'



const Header = () => {
    const pages = ['About', 'Contact']
    return (
        <header className={style.header}>
                <div className={style.logo}>
                    <Link href={'/'}>
                        TERRART
                        {/* <img src="" alt="TERRART トップページ"/> */}
                    </Link>
                </div>
                <div className={style.pages}>
                    {pages.map((res,index) => {
                        const lowerCasePage = res.toLowerCase()
                        return (
                            <span className={UtilsStyle.fontset_e_s} key={index}>
                                <Link href={`/${lowerCasePage}`} >{res}</Link>
                            </span>
                        )
                    })}
                </div>
        </header>
    )
}
export default Header
