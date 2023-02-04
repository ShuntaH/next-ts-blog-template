import { FormControl, FormControlProps, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import SearchInput from "./search-input";
import SearchChakraFontAwesomeIcon from "./search-chakra-font-awesome-icon";
import { SearchModalHook, SearchModalOpenEvents } from "../../interfaces/search";


type Props =  {
  formControlProps?: FormControlProps
  refOrFunc: SearchModalHook
}

/**
 * 検索入力欄のコンポーネント、モーダルを開く関数をオプションとして渡せる。
 * 渡すと、インプットコンポーネントに入力を受け付けず、モーダルにその機能を任せるようになる。
 *
 * @param formControlProps
 * @param modalOpenFunc
 */
const SearchFormControl = ({
  formControlProps,
  refOrFunc
}: Props) => {
  const isFunc = typeof refOrFunc === 'function'
  const modalOpenFunc = isFunc ? refOrFunc : null
  const modalRef = !isFunc ? refOrFunc : null

  // イベントを渡されていれば、モーダルを開く入力欄とする
  const modalOpenEvents: SearchModalOpenEvents | { [key: string]: never } = modalOpenFunc ?
    {
      onClick: modalOpenFunc,
      onInput: modalOpenFunc,
      onChange: modalOpenFunc,
      onTouchStart: modalOpenFunc
    } : {}

  // モーダルを開くイベントファンクションが渡されていれば
  // それはヘッダーにあるので,レスポンシブを考慮する。
  // 渡されていなければ、モーダルの中の入力欄になるので、
  // レスポンシブは関係なく、width = 100%
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
