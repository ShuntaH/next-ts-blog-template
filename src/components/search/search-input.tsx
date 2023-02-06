import { Input, InputProps } from '@chakra-ui/react'
import React from "react";
import { SearchModalHook, SearchModalOpenEvents } from "../../interfaces/search";
import { STYLES } from "../../lib/constants";
import { useSearchInput } from "../../contexts/searchContexts";


type Props = {
  inputProps?: InputProps
  refOrFunc: SearchModalHook
}

const SearchInput = ({ inputProps, refOrFunc }: Props) => {
  const isFunc = typeof refOrFunc === 'function'
  const modalRef = !isFunc ? refOrFunc : null

  const {valueInput, dispatch} = useSearchInput()

  // イベントごとにモーダルを開く関数を割り振る
  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } =
    isFunc ?
      {
        onClick: refOrFunc,
        onTouchStart: refOrFunc
      } : {}

  const handleInput = (e: React.MouseEvent<HTMLInputElement>): void => {
    if(isFunc) {
      e.preventDefault()
      return
    }
    dispatch({
      valueInput: e.currentTarget.value,
      type: 'update'
    })
  }

  return (
    <Input
      type='text'
      placeholder={"Full-text search 全文検索"}
      focusBorderColor={STYLES.accentColorLighter}
      {...inputProps}
      {...modalOpenEvents}
      onInput={handleInput}
      ref={modalRef}
      value={valueInput}
    />
  );
}

export default SearchInput
