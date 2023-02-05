import { Input, InputProps } from '@chakra-ui/react'
import React from "react";
import { SearchModalHook, SearchModalOpenEvents } from "../../interfaces/search";
import { STYLES } from "../../lib/constants";

type Props = {
  inputProps?: InputProps
  refOrFunc: SearchModalHook
}

const SearchInput = ({ inputProps, refOrFunc }: Props) => {
  const isFunc = typeof refOrFunc === 'function'
  const modalRef = !isFunc ? refOrFunc : null
  
  // イベントごとにモーダルを開く関数を割り振る
  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } =
    isFunc ?
      {
        onClick: refOrFunc,
        onInput: refOrFunc,
        onTouchStart: refOrFunc
      } : {}

  return (
    <Input
      type='text'
      placeholder={"Full-text search 全文検索"}
      focusBorderColor={STYLES.accentColorLighter}
      {...inputProps}
      {...modalOpenEvents}
      ref={modalRef}
    />
  );
}

export default SearchInput
