import { parseISO, format } from 'date-fns'
import { memo } from 'react'

const Date = ( props ) => {
  const { date } = props
  const parse = parseISO(date)
  return(
    <>
    <time className={`time`}>{format(parse, 'yyyy.M.d')}</time>
    </>
  )
}
export default memo(Date)
