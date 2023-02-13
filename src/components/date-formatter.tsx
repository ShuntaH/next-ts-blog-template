import { format, parseISO } from 'date-fns'
import React from "react";

type Props = {
  dateString: string
}

const DateFormatter: React.VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
