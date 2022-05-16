import React, { memo } from 'react'
import Link from 'next/link'

import { TwitterIcon, GithubIcon } from '../atoms'
import { useMediaQuery } from '../../lib/useMediaQuery'
import { Hamburger } from '../moles'

const Header: React.VFC = () => {
  const isPc = useMediaQuery(768, 'min')

  return (
    <header className="w-full fixed top-0 left-0 z-50 sm:px-8 px-4">
      <div className="flex items-center justify-between md:h-25 h-20">
        <Link href={`/`}>
          <span
            className={`md:text-5xl text-xl cursor-pointer font-roboto font-bold relative z-50`}
          >
            TERRART
          </span>
        </Link>
        {isPc ? (
          <div>
            <ul className="flex gap-10 items-center">
              <li className="text-base font-bold cursor-pointer here here-hover">
                <Link href="/">Articles</Link>
              </li>
              <li className="text-base font-bold cursor-not-allowed line-through">
                Products
              </li>
              {/* <li><Link href="/products">Products</Link></li> */}
            </ul>
          </div>
        ) : (
          <Hamburger />
        )}
      </div>
      <div className="fixed bottom-20 sm:right-8 flex-col gap-8 md:flex hidden">
        <a
          href="https://github.com/sa-tsuki"
          target="_blank"
          rel="noreferrer"
          className="transition duration-200 hover:scale-110"
        >
          <GithubIcon />
        </a>
        <a
          href="https://twitter.com/_sa_tsuki"
          target="_blank"
          rel="noreferrer"
          className="transition duration-200 hover:scale-110"
        >
          <TwitterIcon />
        </a>
      </div>
    </header>
  )
}

export default memo(Header)
