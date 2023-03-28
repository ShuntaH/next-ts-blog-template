import { format, parseISO } from 'date-fns'
import { useEffect, useState } from "react";
import { ja } from "date-fns/locale";

interface Props {
  dateString: string
}

function DateFormatter({ dateString }: Props) {
  const [ date, setDate ] = useState('')

  useEffect(
    // デプロイ先のサーバーのタイムゾーンが異なる場合、
    // サーバーサイドレンダリング時とクライアントサイドレンダリング時で
    // 日付がずれるのでハイドレーションエラーが発生する。
    // そのため、useEffectを使ってクライアントサイドレンダリング時に date を更新する。
    () => {
      setDate(
        format(
          parseISO(dateString),
          'yyyy/MM/dd',
          { locale: ja })
      )

    },
    [ dateString ]
  )
  return (
    <time
      dateTime={dateString}
      style={{display: "inline-block", minWidth: '70px'}}
    >
      { date }
    </time>
  )
}

export default DateFormatter
