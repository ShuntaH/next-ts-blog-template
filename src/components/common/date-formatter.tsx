import { format, parseISO } from 'date-fns'
import { useMemo } from 'react'

interface Props {
  dateString: string
}

function DateFormatter ({ dateString }: Props) {
  const date = useMemo(
    () => parseISO(dateString),
    [dateString]
  )
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}

export default DateFormatter
