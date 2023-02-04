import React, { EventHandler } from "react";
import ChakraFontAwesomeIcon from "../chakra-font-awesome-icon";
import { SearchModalOpenEvents } from "../../interfaces/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = {
  modalOpenFunc?: EventHandler<any>
}

const SearchChakraFontAwesomeIcon = ({ modalOpenFunc }: Props) => {
  const modalOpenEvents: SearchModalOpenEvents | {} = modalOpenFunc ?
    {
      onClick: modalOpenFunc,
      onChange: modalOpenFunc,
      onFocus: modalOpenFunc,
      onTouchStart: modalOpenFunc
    } : {}

  return (
    <ChakraFontAwesomeIcon
      icon={faMagnifyingGlass}
      {...modalOpenEvents}
    />
  );
}

export default SearchChakraFontAwesomeIcon
