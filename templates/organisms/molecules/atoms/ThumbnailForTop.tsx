import React from 'react'

const ThumbnailForTop = (props) => {
    const {src, alt, width, height } = props
    return (
        <div>
            <img src={src} alt={alt} width={width} height={height}/>
        </div>
    )
}

export default ThumbnailForTop
