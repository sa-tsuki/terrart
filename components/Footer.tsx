import Link from 'next/link'
import React, { memo } from 'react'

import { Breadcrumb } from './index'
import { FooterBottom } from './orgs'
import { Wave } from './orgs/parts'
import { Space200 } from './Space'

const Footer: React.VFC = () => {
  const pages = ['About', 'Contact']

  return (
    <>
      <Space200 />
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
            {pages.map((res, index) => {
              const lowerCasePage = res.toLowerCase()
              return (
                <span key={index}>
                  <Link href={`/${lowerCasePage}`}>{res}</Link>
                </span>
              )
            })}
          </div>
          <FooterBottom />
          {/* <Wave /> */}
        </div>
      </footer>
    </>
  )
}
export default memo(Footer)
