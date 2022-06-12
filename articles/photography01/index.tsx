import React, { memo, useEffect } from 'react'
import Link from 'next/link'
import CSS from 'csstype'

const s_photo: CSS.Properties = {
  width: 'calc(25% - ((60px / 4))',
  opacity: 0,
  transform: 'translateY(-20px)',
  transitionProperty: 'transform',
  transitionDuration: '.2s',
}

const index = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.anime')
    targets.forEach(async (target) => {
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     console.log(target)
      //     // resolve()
      //   }, 1000)
      // })
    })
  }, [])

  return (
    <>
      <div className="flex sm:p-8 p-4 bg-white">
        <div className="w-1/12">
          <div className="flex flex-col gap-2 text-sm font-bold">
            <div className="hover:opacity-75 transition duration-200">
              <Link href="/photography01">Portfolio</Link>
            </div>
            <div className="hover:opacity-75 transition duration-200">
              <Link href="/photography01">About</Link>
            </div>
            <div className="hover:opacity-75 transition duration-200">
              <Link href="/photography01">Instagram</Link>
            </div>
            <div className="hover:opacity-75 transition duration-200">
              <Link href="/photography01">Twitter</Link>
            </div>
          </div>
        </div>
        <div className="w-11/12 flex items-center flex-wrap gap-5 ml-5">
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo01.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo02.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo03.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo04.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo02.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo03.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo04.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo01.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo03.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo04.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo01.jpg" alt="" />
          </div>
          <div className="rounded-sm overflow-hidden anime" style={s_photo}>
            <img src="/images/photo02.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(index)
