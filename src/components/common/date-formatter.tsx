import { format, parseISO } from 'date-fns'
import { ja } from 'date-fns/locale'

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
  return (
    <time dateTime={dateString}>
      {
        format(
          parseISO(dateString),
          'LLLL	d, yyyy',
          { locale: ja })
      }
    </time>
  )
}

export default DateFormatter
