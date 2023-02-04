import { Input, InputProps } from '@chakra-ui/react'
import React from "react";
import { SearchModalOpenEvents } from "../../interfaces/search";
import { STYLES } from "../../lib/constants";

type Props = {
  inputProps?: InputProps
  modalOpenEvents: SearchModalOpenEvents | {}
}

const SearchInput = ({ inputProps, modalOpenEvents }: Props) => {

  return (
    <Input
      type='text'
      placeholder={"Full-text search 全文検索"}
      focusBorderColor={STYLES.accentColorLighter}
      {...inputProps}
      {...modalOpenEvents}
    />
  );
}

export default SearchInput
