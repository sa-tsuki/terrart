import React, { memo } from 'react'
import { Editor, Github, Rights, Twitter } from './parts'

const FooterBottom = () => {
    return (
        <div className="bottom">
            <div className="icon">
                <Twitter />
                <Github />
            </div>
            <Editor />
            <Rights />
        </div>
    )
}

export default memo(FooterBottom)
