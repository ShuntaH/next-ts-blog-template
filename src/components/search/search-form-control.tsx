import { FormControl, FormControlProps, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { EventHandler } from "react";
import SearchInput from "./search-input";
import SearchChakraFontAwesomeIcon from "./search-chakra-font-awesome-icon";


type Props = {
  formControlProps?: FormControlProps
  modalOpenFunc?: EventHandler<any>
}

/**
 * 検索入力欄のコンポーネント、モーダルを開く関数をオプションとして渡せる。
 * 渡すと、インプットコンポーネントに入力を受け付けず、モーダルにその機能を任せるようになる。
 *
 * @param formControlProps
 * @param modalOpenFunc
 */
const SearchFormControl = ({ formControlProps, modalOpenFunc }: Props) => {

  return (
    <FormControl
      width={{ base: 'full', md: '2xs' }}
      {...formControlProps}
    >
      {/*入力欄と虫眼鏡アイコンで1つの検索入力欄としてグループを作る*/}
      <InputGroup size='md'>
        <SearchInput modalOpenFunc={modalOpenFunc}/>
        <InputRightElement>
          <SearchChakraFontAwesomeIcon modalOpenFunc={modalOpenFunc}/>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControl
