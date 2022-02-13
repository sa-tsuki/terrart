import { parseISO, format } from 'date-fns'
import { memo } from 'react'

type Props = {
  date: string
}

const Date: React.VFC<Props> = (props) => {
  const { date } = props
  const parse = parseISO(date)
  return (
    <>
      <time className={`time`}>{format(parse, 'yyyy.M.d')}</time>
    </>
  )
}
export default memo(Date)
