import { Highlight, Text, TextProps } from '@chakra-ui/react'
import React from "react";
import Fuse from "fuse.js";
import { SEARCH_CHAR_DISTANCE_IN_VALUE, SEARCH_CHAR_NUMBER_AROUND_IN_VALUE } from "../../lib/constants";


type Props = {
  textProps?: TextProps
  match: Fuse.FuseResultMatch
}

const SearchModalContentBodyHighlight = ({ match, textProps }: Props) => {

  /**
   * 全文検索して、マッチしたとき、マッチ結果の中に含まれる、マッチ結果の単語の最初と
   * 最後が何文字目にあるかの情報をもとに、マッチした単語を取得する。
   * 検索される文字列の中でハイライトを当てるべき文字列のクエリとなる。
   * @param match
   */
  const getHighlightQueries = (match: Fuse.FuseResultMatch) => {
    return match.indices.map(
      (range) => match.value!.slice(range[0], range[1] + 1)
    )
  }

  const getCharsWithAroundHighlight = (match: Fuse.FuseResultMatch): string => {
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
        let end = (range[1] + SEARCH_CHAR_NUMBER_AROUND_IN_VALUE + 1) > valueLength + 1 ?
          valueLength : range[1] + SEARCH_CHAR_NUMBER_AROUND_IN_VALUE + 1

        // 前の end とこのループの start を比較して、表示する文字列同士が近くにあったら
        // 前の start から今の end まで1つのマッチした表示結果文字列として扱う。
        // 前のループの表示結果文字列はこれに含まれるので取り除くべき文字列と判定できるよう
        // に前のループ番号を控えておいて、のちに取り除く。
        if (
          index >= 1 &&
          start - prevEnd <= SEARCH_CHAR_DISTANCE_IN_VALUE
        ) {
          start = prevStart
          shouldExclude = [ ...shouldExclude, index - 1 ]
        }
        console.log('prev start', prevStart)
        console.log('prev end', prevEnd)
        console.log('start', start)
        console.log('end', end)
        prevStart = start
        prevEnd = end
        return match.value!.substring(start, end)
      }
    )

    console.log('parts', parts)
    const cleanParts = parts.filter((part, index) => {
      if (!shouldExclude.includes(index)) {
        return part
      }
    })

    console.log('clean parts', cleanParts)
    // マッチした文字列を含む文字列を連結して、検索結果として表示する文字列を作成する。
    const joined = cleanParts.join('.........')
    console.log('join', joined)
    return joined
  }

  return (
    <Text {...textProps}>
      <Highlight
        query={getHighlightQueries(match)}
        styles={{ py: '0', bg: 'teal.100' }}
      >
        {getCharsWithAroundHighlight(match)}
      </Highlight>
    </Text>
  );
}

export default SearchModalContentBodyHighlight
