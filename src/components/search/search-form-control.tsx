import { FormControl, FormControlProps, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from "react";
import { SearchModalHook } from "interfaces/search";
import SearchInput from "components/search/search-input";
import SearchChakraFontAwesomeIcon from "components/search/search-chakra-font-awesome-icon";
import { devLog } from "lib/helpers";


type Props =  {
  formControlProps?: FormControlProps
  refOrFunc: SearchModalHook
}

/**
 * @param formControlProps
 * @param refOrFunc
 */
function SearchFormControl({formControlProps,refOrFunc }: Props) {
  // モーダルを開くイベントファンクションが渡されていれば
  // それはヘッダーにあるので,レスポンシブを考慮する。
  // 渡されていなければ、モーダルの中の入力欄になるので、
  // レスポンシブは関係なく、width = 100%
  const isFunc = typeof refOrFunc === 'function'
  const widthAttr = isFunc ?
    { base: 'full', md: '2xs' } : 'full'

  devLog(['SearchFormControl'])

  return (
    <FormControl
      width={widthAttr}
      {...formControlProps}
    >
      {/*入力欄と虫眼鏡アイコンで1つの検索入力欄としてグループを作る*/}
      <InputGroup size='md'>
        <SearchInput refOrFunc={refOrFunc}/>
        <InputRightElement>
          <SearchChakraFontAwesomeIcon refOrFunc={refOrFunc}/>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchFormControl
