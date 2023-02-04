import { Input, InputProps } from '@chakra-ui/react'
import React, { EventHandler } from "react";
import { SearchModalOpenEvents } from "../../interfaces/search";

type Props = {
  inputProps?: InputProps
  modalOpenFunc?: EventHandler<any>
}

const SearchInput = ({ inputProps, modalOpenFunc }: Props) => {

  const modalOpenEvents: SearchModalOpenEvents | {} = modalOpenFunc ?
    {
      onChange: modalOpenFunc,
      onFocus: modalOpenFunc,
      onTouchStart: modalOpenFunc
    } : {}

  return (
    <Input
      type='text'
      placeholder={"Full-text search 全文検索"}
      {...inputProps}
      {...modalOpenEvents}
    />
  );
}

export default SearchInput
