import Link from 'next/link'
import React, { useState } from 'react'

import { CrossIcon, GithubIcon, HamburgerIcon, TwitterIcon } from '../atoms'

const Hamburger: React.VFC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative w-9 h-9 z-50">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? 'on' : ''} hamburger absolute inset-0`}
        >
          <CrossIcon />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? '' : 'on'} hamburger absolute inset-0`}
        >
          <HamburgerIcon />
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition duration-300 w-full h-full bg-gray fixed inset-0`}
      >
        <div className="max-width text-gray-50 pt-20 pb-8">
          <div className="rounded-3xl bg-gray-900 pt-8 pb-6 flex items-center flex-col">
            <div className="text-md text-gray-50 font-bold -mt-4">
              Other Spaces
            </div>
            <div className="text-xs text-gray-100 font-bold">
              Let&apos;s jump into them
            </div>
            <div className="flex items-center gap-16 text-gray-50 mt-5">
              <a
                href="https://github.com/sa-tsuki"
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:scale-110"
              >
                <GithubIcon width={40} />
              </a>
              <a
                href="https://twitter.com/_sa_tsuki"
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:scale-110"
              >
                <TwitterIcon width={40} />
              </a>
            </div>
          </div>
          <div className="md:mb-28 mb-16 md:mt-0 mt-16">
            <ul className="flex md:gap-10 gap-5 md:items-center items-start md:flex-row flex-col">
              <li className="text-base font-bold text-gray-900 cursor-pointer here here-hover">
                <Link href="/">Articles</Link>
              </li>
              <li className="text-base font-bold text-gray-900 cursor-not-allowed line-through">
                Products
              </li>
              {/* <li><Link href="/products">Products</Link></li> */}
            </ul>
          </div>
          <div className="flex items-end justify-between">
            <Link href={`/`}>
              <span className="md:text-5xl text-xl -mb-3 cursor-pointer font-roboto font-bold  text-gray-900">
                TERRART
              </span>
            </Link>
            <div className="sm:text-base text-xs font-bold -mb-2  text-gray-900">
              Editer / Satsuki Isobe
            </div>
          </div>
          <div className="w-full h-1 bg-gray-900 rounded-full my-2"></div>
          <div className="sm:text-xs text-xxs text-gray-500 font-bold -mt-1">
            TERRART All Rights Reserved
          </div>
        </div>
      </div>
    </>
  )
}

export default Hamburger
