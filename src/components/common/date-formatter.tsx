import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'

interface Props {
  dateString: string
}

function DateFormatter({ dateString }: Props) {
  const [ date, setDate ] = useState(new Date())

  useEffect(
    // デプロイ先のサーバーのタイムゾーンが異なる場合、
    // サーバーサイドレンダリング時とクライアントサイドレンダリング時で
    // 日付がずれるのでハイドレーションエラーが発生する。
    () => {
      setDate(parseISO(dateString))
    },
    [ dateString ]
  )
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}

export default DateFormatter
