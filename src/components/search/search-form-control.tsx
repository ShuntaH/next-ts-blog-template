import { FormControl, FormControlProps, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { EventHandler } from "react";
import SearchInput from "./search-input";
import SearchChakraFontAwesomeIcon from "./search-chakra-font-awesome-icon";
import { SearchModalOpenEvents } from "../../interfaces/search";


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

  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } = modalOpenFunc ?
    {
      onClick: modalOpenFunc,
      onInput: modalOpenFunc,
      onChange: modalOpenFunc,
      onTouchStart: modalOpenFunc
    } : {}

  // モーダルを開くイベントファンクションが渡されていればそれはヘッダーにあるので、
  // レスポンシブを考慮する。
  // 渡されていなければ、モーダルの中の入力欄になるので、レスポンシブは関係なく、width = 100%
  const widthAttr = modalOpenFunc ?
    { base: 'full', md: '2xs' } : 'full'

  return (
    <FormControl
      width={widthAttr}
      {...formControlProps}
    >
      {/*入力欄と虫眼鏡アイコンで1つの検索入力欄としてグループを作る*/}
      <InputGroup size='md'>
        <SearchInput modalOpenEvents={modalOpenEvents}/>
        <InputRightElement>
          <SearchChakraFontAwesomeIcon modalOpenEvents={modalOpenEvents}/>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControl
