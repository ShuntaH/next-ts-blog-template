import { Input, InputProps } from '@chakra-ui/react'
import React from "react";
import { SearchModalHook, SearchModalOpenEvents } from "interfaces/search";
import { STYLES } from "lib/constants";
import { useSearchInput } from "contexts/searchInputContext";


type Props = {
  inputProps?: InputProps
  refOrFunc: SearchModalHook
}

/**
 * ヘッダーの検索モーダルを開く input と 検索モーダルで実際に入力できる input の 2通りがある。
 * モーダルを開く関数が渡ってくれば前者で、 ref だったら後者。
 * @param inputProps
 * @param refOrFunc
 * @constructor
 */
function SearchInput({ inputProps, refOrFunc }: Props){
  const isFunc = typeof refOrFunc === 'function'
  const modalRef = !isFunc ? refOrFunc : null

  const {searchInput, dispatch} = useSearchInput()

  // イベントごとにモーダルを開く関数を割り振る
  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } =
    isFunc ? { onClick: refOrFunc} : {}

  /**
   * モーダルを発火する input ではなく、モーダル内の input の時、dispatch する。
   * @param e
   */
  const handleInput = (e: React.MouseEvent<HTMLInputElement>): void => {

    if(isFunc) {
      e.preventDefault()
      return
    }
    dispatch({
      searchInput: e.currentTarget.value,
      type: 'update'
    })
  }

  return (
    <Input
      type='text'
      placeholder={"Full-text search 全文検索"}
      focusBorderColor={STYLES.colorLight}
      {...inputProps}
      {...modalOpenEvents}
      onInput={handleInput}
      ref={modalRef}
      value={searchInput}
    />
  );
}

export default SearchInput
