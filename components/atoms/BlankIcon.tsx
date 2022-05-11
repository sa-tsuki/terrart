import React from 'react'

type Props = {
  width: number
}

const BlankIcon: React.VFC<Props> = (props) => {
  const { width = 24 } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={width}
      style={{ fill: 'currentcolor' }}
    >
      <path
        id="blank_icon"
        d="M0,0V12H12V9H10.5v1.5h-9v-9H3V0ZM6,0,8.25,2.25,4.5,6,6,7.5,9.75,3.75,12,6V0Z"
      />
    </svg>
  )
}

export default BlankIcon
