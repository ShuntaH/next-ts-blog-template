import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import { useSearchInputContext } from "contexts/searchInputContext";
import { useDisclosureContext } from "contexts/disclouserContext";
import { SEARCH_FORM_PLACEHOLDER, STYLES } from "lib/constants";
import ChakraFontAwesomeIcon from "components/foundations/chakra-font-awesome-icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = { formControlProps?: FormControlProps }

function SearchFormControlInModal({formControlProps}: Props) {
  const {searchInput, dispatch} = useSearchInputContext()
  const { afterOpenRef } = useDisclosureContext()

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
          placeholder={SEARCH_FORM_PLACEHOLDER}
          focusBorderColor={STYLES.colorLight}
          onInput={handleInput}
          ref={afterOpenRef}
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

export default SearchFormControlInModal
