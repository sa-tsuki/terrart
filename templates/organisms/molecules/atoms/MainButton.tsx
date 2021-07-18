import React from 'react'
import utilsStyles from '../../../../styles/utils.module.css'
// import styled from 'styled-components'

// const Button = styled.button`
//   font-family: inherit;
//   font-size: 17px;
//   font-weight: bold;
//   letter-spacing: 0.2em;
//   color: white;
//   text-aline: center;
//   background: #36bcac;
//   display: block;
//   border: 0;
//   border-radius: 9999px;
//   min-width: 300px;
//   max-height: 50px;
//   padding: 15px 0;
// `

const MainButton = (props: { text: string }) => {
  const { text } = props
  return <button className={utilsStyles.main_button}>{text}</button>
}
export default MainButton
