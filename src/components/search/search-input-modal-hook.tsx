import { FormControlProps } from '@chakra-ui/react'
import React, { EventHandler } from "react";
import SearchFormControl from "./search-form-control";


type Props = {
  onOpen?: EventHandler<any>
  formControlProps?: FormControlProps
}


/**
 * これはモーダルを開く機能を持った Input コンポーネント。
 * Chakra UI のドキュメントページの入力欄 [https://chakra-ui.com/] のように、
 * 入力欄の存在自体はユーザーに教えるためだけのもので、入力欄にフォーカスやタップなど
 * の何らかのイベントを起こすと、モーダルを開らくようにする。そこで検索機能を提供する。
 *
 * @param onOpen
 * @param formControlProps
 */
const SearchInputModalHook = ({ onOpen, formControlProps }: Props) => (
    <SearchFormControl modalOpenFunc={onOpen} {...formControlProps}/>);

export default SearchInputModalHook
