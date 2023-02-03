import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import ChakraFontAwesomeIcon from "../chakra-font-awesome-icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = {
  isOpen: boolean
  onOpen: () => void
  finalRef: React.MutableRefObject<any>
  formControlProps?: FormControlProps
}

function Lorem(props: { count: number }) {
  return null;
}

const SearchInput = ({ isOpen, onOpen, finalRef, formControlProps }: Props) => {
  return (
    <FormControl width={{ base: 'full', md: '2xs' }}>
      <InputGroup size='md'>
        <Input
          type='text'
          placeholder={"Full-text search 全文検索"}
          onChange={onOpen}
          onFocus={onOpen}
          onTouchStart={onOpen}
          ref={finalRef}
        />
        <InputRightElement>
          <ChakraFontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={onOpen}
            onTouchStart={onOpen}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchInput
