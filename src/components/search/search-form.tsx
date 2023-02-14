import { Box, BoxProps, useDisclosure } from '@chakra-ui/react'
import React from "react";
import { SearchInputProvider } from "contexts/searchInputContext";
import SearchFormControl from "components/search/search-form-control";
import SearchModal from "components/search/search-modal";


type Props = {
  boxProps?: BoxProps
}

const SearchForm: React.VFC<Props> = ({boxProps}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <SearchModal
          onClose={onClose}
          isOpen={isOpen}
          modalRef={modalRef}
        />
      </Box>
    </SearchInputProvider>

  );
}

export default SearchForm
