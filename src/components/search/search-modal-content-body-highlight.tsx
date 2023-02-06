import { Box, Highlight, HighlightProps, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from "react";
import Fuse from "fuse.js";


type Props = {
  highlightProps?: HighlightProps
  match: Fuse.FuseResultMatch
}

const SearchModalContentBodyHighlight = ({ match, highlightProps }: Props) => {
  const valueRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // if (valueRef) {
    //   const children: HTMLCollection = valueRef.current!.children
    //   console.log('children', children)
    // }
    console.log('trim', trimValue(match))
  })

  const getHighlightQueries = (match: Fuse.FuseResultMatch) => {
    return match.indices.map(
      (range) => match.value!.slice(range[0], range[1] + 1)
    )
  }

  const around = 10
  const trimValue = (match: Fuse.FuseResultMatch): string => {
    const valueLength = match.value!.length
    const parts = match.indices.map(
      (range) => {
        const start = range[0] - around // substring はマイナスになったら0
        const end = (range[1] + around + 1) > valueLength ?
          valueLength
          :
          range[1] + around + 1
        return match.value!.substring(start, end)
      }
    )
    console.log('parts', parts)
    const joined = parts.join('...')
    console.log('join', joined)
    return joined
  }

  return (
    <Box>
      <Text ref={valueRef}>
        <Highlight
          query={getHighlightQueries(match)}
          styles={{
            py: '0',
            bg: 'teal.100'
          }}
        >
          {trimValue(match)}
        </Highlight>
      </Text>
    </Box>
  );
}

export default SearchModalContentBodyHighlight
