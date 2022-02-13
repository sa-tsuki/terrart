import React, { memo } from 'react'
import { DesignSvg } from './parts'

const Design: React.VFC = () => {
  return (
    <div className="block">
      <div className="svg">
        <DesignSvg />
      </div>
      <div className="contents">
        <h3>想像力と創造力</h3>
        <h2>Design.</h2>
        <p>
          <span>デザインしてつくる。</span>
          <span>
            考えて考えてデザインする、とりあえず仮の文言なのでこんな感じにとどめさせてくdさいね。
          </span>
          <span>でもとにかく練習あるのみ</span>
        </p>
      </div>
    </div>
  )
}

export default memo(Design)
