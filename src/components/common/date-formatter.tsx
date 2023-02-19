import { format, parseISO } from 'date-fns'
import React, { useMemo } from "react";
import { serverOrBrowser } from "lib/helpers";

type Props = {
  dateString: string
}

const DateFormatter: React.FC<Props> = ({ dateString }) => {

  console.log('date string', dateString)
  console.log('date', parseISO(dateString))
  console.log('server or client', serverOrBrowser())

  const date = useMemo(() => parseISO(dateString), [dateString])
  return <time dateTime={dateString}>
    {format(date, 'LLLL	d, yyyy')}
  </time>
}

export default DateFormatter
