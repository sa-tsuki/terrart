import React, { memo } from 'react'
import Link from 'next/link'
import { TwitterIcon } from '../atoms'

const Header: React.VFC = () => {
  return (
    <header className="fixed top-0 left-0 px-20 w-full z-50">
      <div>ローディングBar</div>
      <div className="flex items-center justify-between h-25">
        <Link href={`/`}>
          <span className={`text-5xl cursor-pointer font-roboto font-bold`}>
            TERRART
          </span>
        </Link>
        <div>
          <ul className="flex gap-10 items-center">
            <li className="text-base font-bold cursor-pointer here">
              <Link href="/">Articles</Link>
            </li>
            <li className="text-base font-bold cursor-not-allowed line-through">
              Products
            </li>
            {/* <li><Link href="/products">Products</Link></li> */}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-20 right-20 flex flex-col gap-8">
        <a href="" target="_blank">
          <TwitterIcon />
        </a>
        <a href="" target="_blank">
          <TwitterIcon />
        </a>
      </div>
    </header>
  )
}

export default memo(Header)
