import React from 'react'
import yobidashiStyle from '../assets/css/yobidashi/yobidashi.module.css'

export const Yobidashi = (props) => {
  const { yobidashi } = props
  return <div className={yobidashiStyle.test}>{yobidashi}</div>
}
