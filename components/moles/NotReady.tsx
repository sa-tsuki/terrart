import React, { memo } from 'react'

const NotReady: React.VFC = () => {
  return (
    <div className="w-card opacity-50">
      <div className="mb-1 border-solid border-gray-200 border rounded-lg overflow-hidden">
        <img
          src="images/Mockup.jpg"
          alt="このカテゴリの記事は現在準備中です。"
          className=" object-cover"
        />
      </div>
      <div className="text-sm font-bold ml-1 leading-tight">
        このカテゴリの記事は現在準備中です。
      </div>
    </div>
  )
}

export default memo(NotReady)
