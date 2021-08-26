import React from 'react'
import utilsStyles from '../../../../styles/utils.module.css'

const FunctionButton = (props: { text: string }) => {
  const { text } = props
  return (
      <button className={`${utilsStyles.main_button} ${utilsStyles.accent_shadow}`}>{text}</button>
  )
}
export default FunctionButton
