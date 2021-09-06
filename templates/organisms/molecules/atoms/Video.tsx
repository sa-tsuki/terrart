import React, { useEffect, useRef, useState } from 'react'
import style from 'styled-components'



const Video = () => {

    const [number, setNumber] = useState(1)

    const Image = style.div`
    width: 500px;
    height: 500px;
    margin: 80px;
    position: fixed;
    background-image: url("/scroll/${number}.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    `

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offSetY: number = window.pageYOffset
            console.log(offSetY)
            if(offSetY > 300) setNumber(100)
        })

    },[])

    const ref = useRef()

    return (
        <>
            <Image ref={ref}>
            </Image>
        </>
      )
}
export default Video
