import React from 'react'
import utilsStyles from '../../../../styles/utils.module.css'

const Thumbnail = (props) => {
    const {src, alt, width, height } = props
    return (
        <div>
            <img src={src} alt={alt} width={width} height={height} className={`${utilsStyles.main_shadow}`}/>
        </div>
    )
}

export default Thumbnail
