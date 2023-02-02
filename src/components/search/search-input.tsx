import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import ChakraFontAwesomeIcon from "../chakra-font-awesome-icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = {
  formControlProps?: FormControlProps
}

function Lorem(props: { count: number }) {
  return null;
}

const SearchInput = ({ formControlProps }: Props) => {
  return (
    <FormControl width={{ base: 'full', md: '2xs' }}>
      <InputGroup size='md'>
        {/*<Input*/}
        {/*  type='text'*/}
        {/*  placeholder={"Full-text search 全文検索"}*/}
        {/*  onInput={onOpen}*/}
        {/*  ref={finalRef}*/}
        {/*/>*/}
        <Input
          type='text'
          placeholder={"Full-text search 全文検索"}
        />
        {/*<InputRightElement>*/}
        {/*  <ChakraFontAwesomeIcon*/}
        {/*    _hover={{ cursor: "pointer" }}*/}
        {/*    icon={faMagnifyingGlass}*/}
        {/*    onClick={onOpen}*/}
        {/*  />*/}
        {/*</InputRightElement>*/}
        <InputRightElement>
          <ChakraFontAwesomeIcon
            _hover={{ cursor: "pointer" }}
            icon={faMagnifyingGlass}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchInput
