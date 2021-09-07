import React, { useEffect, useRef, useState } from 'react'
import videoStyle from '../../../../styles/video.module.css'

const Video = () => {

    const [number, setNumber] = useState(1000)
    const rate = 0.1

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offSetY: number = (window.pageYOffset * rate) + 1000
            setNumber(Math.floor(offSetY))
        })

    },[])

    const ref = useRef()

    return (
        <>
        <section className={`${videoStyle.section}`}>
            <div ref={ref}>
                {<img className={`${videoStyle.img}`} src={`/scroll/${number}.jpg`} />}
            </div>
        </section>
        </>
      )
}
export default Video
