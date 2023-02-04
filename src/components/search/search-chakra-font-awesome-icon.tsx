import React from "react";
import ChakraFontAwesomeIcon from "../chakra-font-awesome-icon";
import { SearchModalOpenEvents } from "../../interfaces/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = {
  modalOpenEvents: SearchModalOpenEvents | {}
}

const SearchChakraFontAwesomeIcon = ({ modalOpenEvents }: Props) => {


  return (
    <ChakraFontAwesomeIcon
      icon={faMagnifyingGlass}
      {...modalOpenEvents}
    />
  );
}

export default SearchChakraFontAwesomeIcon
