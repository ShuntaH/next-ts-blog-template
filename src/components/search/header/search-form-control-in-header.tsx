import { FormControl, FormControlProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import { SEARCH_FORM_PLACEHOLDER, STYLES } from "lib/constants";
import { useSearchInputContext } from "contexts/searchInputContext";
import { useDisclosureContext } from "contexts/disclouserContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "components/foundations/chakra-font-awesome-icon";
import { useToggleSearchModal } from "hooks/useKeyboradEvents";


type Props = {
  formControlProps?: FormControlProps
}

/**
 * ヘッダーの検索入力欄
 * @param formControlProps
 */
function SearchFormControlInHeader({ formControlProps }: Props) {
  const { onOpen, afterCloseRef } = useDisclosureContext()
  const { searchInput } = useSearchInputContext()
  useToggleSearchModal()

  return (
    <FormControl
      position={"relative"}
      width={{ base: 'full', md: '2xs' }}
      {...formControlProps}
    >
      {/*入力欄と虫眼鏡アイコンで1つの検索入力欄としてグループを作る*/}
      <InputGroup size='md'>
        <Input
          type='text'
          placeholder={SEARCH_FORM_PLACEHOLDER}
          focusBorderColor={STYLES.colorLight}
          onClick={onOpen}
          ref={afterCloseRef}
          defaultValue={searchInput}
        />
        <InputRightElement>
          <ChakraFontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={onOpen}
            display={"inline"}
            width={4}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControlInHeader
