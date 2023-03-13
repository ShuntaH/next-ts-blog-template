import { Highlight, Text, TextProps } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import Fuse from 'fuse.js'
import { SEARCH_CHAR_DISTANCE_IN_VALUE, SEARCH_CHAR_NUMBER_AROUND_IN_VALUE } from 'lib/constants'

interface Props {
  textProps?: TextProps
  match: Fuse.FuseResultMatch
}

function SearchModalContentBodyHighlightInModal ({ match, textProps }: Props) {
  /**
   * 全文検索して、マッチしたとき、マッチ結果の中に含まれる、マッチ結果の単語の最初と
   * 最後が何文字目にあるかの情報をもとに、マッチした単語を取得する。
   * 検索される文字列の中でハイライトを当てるべき文字列のクエリとなる。
   * @param match
   */
  const getHighlightQueries = useCallback(
    (match: Fuse.FuseResultMatch) => match.indices.map(
      (range) => match.value!.slice(range[0], range[1] + 1))
    , [match])

  /**
   * 表示される検索結果の文字列を作成する。
   * 検索対象の文章を検索結果として表示すると長すぎるので、
   * ハイライトが当たるマッチした文字列の前後を長めにとった文字列の
   * 配列を作成して、それを省略記号でジョインする。ヒットした文字列の前後を長めにとった
   * 文字列以外の文字列が取り除かれる。
   * またマッチ文字列が近くにあった場合は最初のヒットした文字列の前と
   * 最後にヒットした文字列の後を長めにとった文字列がジョインされる。
   * @param match
   */
  const getCharsAroundHighlight = useCallback(
    (match: Fuse.FuseResultMatch): string => {
      const valueLength = match.value!.length
      let shouldExclude: number[] = []
      let prevStart: number = 0
      let prevEnd: number = 0
      const parts = match.indices.map(
        (range, index) => {
          // substring() は引数がマイナスになったら0
          // マイナス番目の文字を検索しない。
          let start = range[0] - SEARCH_CHAR_NUMBER_AROUND_IN_VALUE

          // 検索対象の文字列の周辺の文字で、最後の文字のインデックスが全体の文字数を上回るとき、
          // 抜き取られる文字列の最後の文字は検索対象の最後の文字になる。
          const end = (range[1] + SEARCH_CHAR_NUMBER_AROUND_IN_VALUE + 1) > valueLength + 1
            ? valueLength
            : range[1] + SEARCH_CHAR_NUMBER_AROUND_IN_VALUE + 1

          // 前の end とこのループの start を比較して、表示する文字列同士が近くにあったら
          // 前の start から今の end まで1つのマッチした表示結果文字列として扱う。
          // 前のループの表示結果文字列はこれに含まれるので取り除くべき文字列と判定できるよう
          // に前のループ番号を控えておいて、のちに取り除く。
          if (
            index >= 1 &&
            start - prevEnd <= SEARCH_CHAR_DISTANCE_IN_VALUE
          ) {
            start = prevStart
            shouldExclude = [...shouldExclude, index - 1]
          }
          prevStart = start
          prevEnd = end
          return match.value!.substring(start, end)
        })

      const cleanParts = parts.filter((part, index) => {
        if (!shouldExclude.includes(index)) {
          return part
        }
      })
      // マッチした文字列を含む文字列を連結して、検索結果として表示する文字列を作成する。
      // ヒット数が多すぎて長くなったら css の方でトリムする。
      return cleanParts.join('.........')
    }, [match])

  return (
    <Text
      {...textProps}
      sx={{
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '4'
      }}>
      <Highlight
        query={getHighlightQueries(match)}
        styles={{ py: '0', bg: 'teal.100' }}
      >
        {getCharsAroundHighlight(match)}
      </Highlight>
    </Text>
  )
}

export default SearchModalContentBodyHighlightInModal
