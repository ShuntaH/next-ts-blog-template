import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import { STYLES } from "lib/constants";
import { useSearchInput } from "contexts/searchInputContext";
import { useDisclosureContext } from "contexts/disclouserContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";


type Props = {
  formControlProps?: FormControlProps
}

function SearchFormControlHeader({ formControlProps }: Props) {
  const { onOpen } = useDisclosureContext()
  const {searchInput} = useSearchInput()
  return (
    <FormControl
      width={{ base: 'full', md: '2xs' }}
      {...formControlProps}
    >
      {/*入力欄と虫眼鏡アイコンで1つの検索入力欄としてグループを作る*/}
      <InputGroup size='md'>
        <Input
          type='text'
          placeholder={"Full-text search 全文検索"}
          focusBorderColor={STYLES.colorLight}
          onClick={onOpen}
          defaultValue={searchInput}
        />
        <InputRightElement>
          <ChakraFontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={onOpen}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControlHeader
