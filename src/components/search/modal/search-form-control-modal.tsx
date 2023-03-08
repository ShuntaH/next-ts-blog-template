import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "components/foundations/chakra-font-awesome-icon";
import { STYLES } from "lib/constants";
import { useSearchInputContext } from "contexts/searchInputContext";
import { useDisclosureContext } from "contexts/disclouserContext";


type Props =  {
  formControlProps?: FormControlProps
}

function SearchFormControlModal({ formControlProps }: Props) {
  const {searchInput, dispatch} = useSearchInputContext()
  const { modalRef } = useDisclosureContext()

  const handleInput = (e: React.MouseEvent<HTMLInputElement>): void => {
    dispatch({
      searchInput: e.currentTarget.value,
      type: 'update'
    })
  }

  return (
    <FormControl
      width={"full"}
      {...formControlProps}
    >
      <InputGroup size='md'>
        <Input
          type='text'
          placeholder={"Full-text search 全文検索"}
          focusBorderColor={STYLES.colorLight}
          onInput={handleInput}
          ref={modalRef}
          value={searchInput}
        />
        <InputRightElement>
          <ChakraFontAwesomeIcon
            icon={faMagnifyingGlass}
            width={4}
            display={"inline"}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControlModal
