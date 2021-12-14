import React, { memo } from 'react'
import { DevelopmentSvg } from './parts'

const Development = () => {
    return (
        <div className="block">
            <div className="svg">
                <DevelopmentSvg />
            </div>
            <div className="contents">
                <h3>モダン開発</h3>
                <h2>Developmant.</h2>
                <p>
                    <span>デザインしてつくる。</span>
                    <span>考えて考えてデザインする、とりあえず仮の文言なのでこんな感じにとどめさせてくdさいね。</span>
                    <span>でもとにかく練習あるのみ</span>
                </p>
            </div>
        </div>
    )
}

export default memo(Development)
