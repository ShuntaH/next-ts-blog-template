import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";
import { STYLES } from "lib/constants";
import { useSearchInput } from "contexts/searchInputContext";
import { useDisclosureContext } from "contexts/disclouserContext";
import { devLog } from "lib/helpers";


type Props =  {
  formControlProps?: FormControlProps
}

function SearchFormControlModal({ formControlProps }: Props) {
  const {searchInput, dispatch} = useSearchInput()
  const { modalRef } = useDisclosureContext()

  const handleInput = (e: React.MouseEvent<HTMLInputElement>): void => {
    devLog(['handleInput', e.currentTarget.value])
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
          <ChakraFontAwesomeIcon icon={faMagnifyingGlass}/>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControlModal
