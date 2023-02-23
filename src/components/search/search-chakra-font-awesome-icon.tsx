import React from "react";
import { SearchModalHook, SearchModalOpenEvents } from "interfaces/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";


type Props = {
  refOrFunc: SearchModalHook
}

function SearchChakraFontAwesomeIcon({ refOrFunc }: Props) {
  const isFunc = typeof refOrFunc === 'function'

  // イベントごとにモーダルを開く関数を割り振る
  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } =
    isFunc ? { onClick: refOrFunc} : {}

  // アイコンにフォーカスを当てないので、 ref は不要
  return (
    <ChakraFontAwesomeIcon
      icon={faMagnifyingGlass}
      {...modalOpenEvents}
    />
  );
}

export default SearchChakraFontAwesomeIcon
