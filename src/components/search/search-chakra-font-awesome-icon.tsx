import React from "react";
import ChakraFontAwesomeIcon from "../chakra-font-awesome-icon";
import { SearchModalHook, SearchModalOpenEvents } from "../../interfaces/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = {
  refOrFunc: SearchModalHook
}

const SearchChakraFontAwesomeIcon = ({ refOrFunc }: Props) => {
  const isFunc = typeof refOrFunc === 'function'

  // イベントごとにモーダルを開く関数を割り振る
  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } =
    isFunc ?
      {
        onClick: refOrFunc,
        onInput: refOrFunc,
        onChange: refOrFunc,
        onTouchStart: refOrFunc
      } : {}

  // アイコンにフォーカスを当てないので、 ref は不要
  return (
    <ChakraFontAwesomeIcon
      icon={faMagnifyingGlass}
      {...modalOpenEvents}
    />
  );
}

export default SearchChakraFontAwesomeIcon
