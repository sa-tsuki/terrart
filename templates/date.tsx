import { parseISO, format } from 'date-fns'
import styled from 'styled-components'

const Time = styled.time`
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.02em;
  line-height: 1;
  color: #838383;
  margin-left: 5px;
  padding-bottom: 40px;
`

const Date = ( props ) => {
  const { date } = props
  const parse = parseISO(date)
  return(
    <>
    <Time>{format(parse, 'yyyy.M.d')}</Time>
    </>
  )
}
export default Date
