import { format, parseISO } from 'date-fns'
import React, { useMemo } from "react";

type Props = {
  dateString: string
}

const DateFormatter: React.FC<Props> = ({ dateString }) => {
  const date = useMemo(() => parseISO(dateString), [dateString])
  return <time dateTime={dateString}>
    {format(date, 'LLLL	d, yyyy')}
  </time>
}

export default DateFormatter
