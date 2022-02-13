import React, { memo } from 'react'
import { Space250 } from './Space'
import { Design, Development, MainProducts } from './orgs'

const Main: React.VFC = () => {
  return (
    <section id="main">
      <div className="max-width">
        <Space250 />
        <Design />
        <Space250 />
        <Development />
        <Space250 />
        <MainProducts />
      </div>
    </section>
  )
}

export default memo(Main)
