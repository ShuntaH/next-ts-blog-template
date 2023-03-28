import { format, parseISO } from 'date-fns'
import { useMemo } from "react";

interface Props {
  dateString: string
}

function DateFormatter({ dateString }: Props) {
  // const [ date, setDate ] = useState(new Date())
  //
  // useEffect(
  //   // デプロイ先のサーバーのタイムゾーンが異なる場合、
  //   // サーバーサイドレンダリング時とクライアントサイドレンダリング時で
  //   // 日付がずれるのでハイドレーションエラーが発生する。
  //   // そのため、useEffectを使ってクライアントサイドレンダリング時に date を更新する。
  //   () => {
  //     setDate(parseISO(dateString))
  //   },
  //   [ dateString ]
  // )
  const date = useMemo(
    () => format(
      parseISO(dateString),
      'LLLL	d, yyyy',
    ),
    [ dateString ]
  )
  return (
    <time dateTime={dateString}>
      {date}
    </time>
  )
}

export default DateFormatter
