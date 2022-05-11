import Link from 'next/link'
import React, { memo } from 'react'

import { useMediaQuery } from '../../lib/useMediaQuery'
import { GithubIcon, TwitterIcon } from '../atoms'

const Footer: React.VFC = () => {
  // const isPc = useMedia('(min-width: 768px)')
  const isPc = useMediaQuery(768, 'min')

  return (
    <footer className="bg-stone-900">
      <div className="max-width text-gray-50 pt-12 pb-8">
        {isPc ? (
          <Link href={`/`}>
            <span className="md:text-5xl text-xl cursor-pointer font-roboto font-bold mb-3">
              PROPS
            </span>
          </Link>
        ) : (
          <div className="rounded-3xl bg-slate-50 pt-8 pb-6 flex items-center flex-col">
            <div className="text-xl text-gray-700 font-bold -mt-4">
              Other Spaces
            </div>
            <div className="text-xs text-gray-400 font-bold">
              Let&apos;s jump into them
            </div>
            <div className="flex items-center gap-16 text-stone-900 mt-5">
              <a
                href="https://github.com/sa-tsuki"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon width={40} />
              </a>
              <a
                href="https://twitter.com/_sa_tsuki"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon width={40} />
              </a>
            </div>
          </div>
        )}
        <div className="md:mb-28 mb-16 md:mt-0 mt-16">
          <ul className="flex md:gap-10 gap-5 md:items-center items-start md:flex-row flex-col">
            <li className="md:text-base text-xl font-bold cursor-pointer">
              <Link href="/">Articles</Link>
            </li>
            <li className="md:text-base text-xl font-bold cursor-not-allowed line-through">
              Products
            </li>
            {/* <li><Link href="/products">Products</Link></li> */}
          </ul>
        </div>
        <div className="flex items-end justify-between">
          {isPc ? (
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/sa-tsuki"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href="https://twitter.com/_sa_tsuki"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </div>
          ) : (
            <Link href={`/`}>
              <span className="md:text-5xl text-xl -mb-3 cursor-pointer font-roboto font-bold">
                PROPS
              </span>
            </Link>
          )}
          <div className="text-base font-bold -mb-2">
            Editer / Satsuki Isobe
          </div>
        </div>
        <div className="w-full h-1 bg-gray-50 rounded-full my-2"></div>
        <div className="text-xs text-gray-500 font-bold -mt-1">
          PROPS All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
