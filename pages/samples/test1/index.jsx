import React from 'react'
import test1 from './assets/css/test1/test1.module.css'
import { Yobidashi } from './components/Yobidashi'

const index = () => {
  return (
    <>
      <div className={test1.test1}>
        テsつ
        <Yobidashi yobidashi={'何？'} />
      </div>
      <Yobidashi yobidashi={'これはどう？'} />
    </>
  )
}

export default index
