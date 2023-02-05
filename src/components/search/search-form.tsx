import { Box, BoxProps, useDisclosure } from '@chakra-ui/react'
import React from "react";
import SearchFormControl from "./search-form-control";
import SearchModal from "./search-modal";
import { SearchInputProvider } from "../../contexts/searchContexts";


type Props = {
  boxProps?: BoxProps
}

const SearchForm = ({boxProps}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(`isOpen ${isOpen}`)
  const modalRef = React.useRef(null)

  const handleOnOpen = (e: React.MouseEvent<HTMLInputElement>): void => {
    // もし複数種類のイベントでこれが発火していたら、ここで type の判定をして
    // どれかのイベントを止める
    if(e.type === 'input') {
      // モーダルを開く入力欄では入力を認めない。
      // console.log('event type', e.type)
      e.currentTarget.value = ''
      e.preventDefault()
    }
    onOpen()
  }

  return (
    <SearchInputProvider>
      <Box {...boxProps}>
        <SearchFormControl refOrFunc={handleOnOpen} />
        <SearchModal onClose={onClose} isOpen={isOpen} modalRef={modalRef}/>
      </Box>
    </SearchInputProvider>

  );
}

export default SearchForm
