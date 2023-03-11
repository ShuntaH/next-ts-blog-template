import { Box, BoxProps, forwardRef } from '@chakra-ui/react'
import React, { useMemo } from "react";


// 更新させないpropsを除外する
type Props = Omit<BoxProps,
  'position' |
  'left' |
  'top' |
  'right' |
  'bottom' |
  'w' |
  'h' |
  'tabIndex' |
  'backgroundColor'>

const Overlay = forwardRef(
  function Overlay(
    props: Props,
    ref?: React.Ref<HTMLDivElement>
  ) {

    const propsForKeyboardEvent = useMemo(() => {
      return props.onKeyDown || props.onKeyUp || props.onKeyPress ?
        {
          tabIndex: 0,  // focusable にしないとキーボードイベントが発火しない
          outline: "none"  // focusable にすると、focus時に枠線が表示されるので、枠線を消す
        } : {}
    }, [ props.onKeyDown, props.onKeyUp, props.onKeyPress ]);

    return (
      <Box
        position={"fixed"}
        left={0}
        top={0}
        w={'100vw'}
        h={'100vh'}
        backgroundColor={"transparent"}
        {...propsForKeyboardEvent}
        {...props}
        ref={ref}
      />
    )
  })

export default Overlay
