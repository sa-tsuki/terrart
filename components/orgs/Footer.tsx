import Link from 'next/link'
import React, { memo } from 'react'

import { TwitterIcon } from '../atoms'

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-width text-gray-50 pt-12 pb-8">
        <Link href={`/`}>
          <span className="text-5xl cursor-pointer font-roboto font-bold mb-3">
            TERRART
          </span>
        </Link>
        <div className="mb-28">
          <ul className="flex gap-10 items-center">
            <li className="text-base font-bold cursor-pointer">
              <Link href="/">Articles</Link>
            </li>
            <li className="text-base font-bold cursor-not-allowed line-through">
              Products
            </li>
            {/* <li><Link href="/products">Products</Link></li> */}
          </ul>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-5">
            <a href="">
              <TwitterIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
          </div>
          <div className="text-base font-bold -mb-2">
            Editer / Satsuki Isobe
          </div>
        </div>
        <div className="w-full h-1 bg-gray-50 rounded-full my-2"></div>
        <div className="text-xs text-gray-500 font-bold -mt-1">
          TERRART All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
