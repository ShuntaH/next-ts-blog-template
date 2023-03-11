import {
  Box,
  BoxProps,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import React from "react";
import SearchResultCards from "components/search/search-result-cards";
import { useDisclosureContext } from "contexts/disclouserContext";
import SearchFormControlInModal from "components/search/modal/search-form-control-in-modal";


type Props = {
  boxProps?: BoxProps
}

function SearchModal ({ boxProps }: Props) {
  const { isOpen, onClose, afterOpenRef, afterCloseRef } = useDisclosureContext()
  return (
    <Box {...boxProps}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={afterOpenRef}
        finalFocusRef={afterCloseRef}
        returnFocusOnClose={false}
        scrollBehavior={"inside"}
      >
        <ModalOverlay width={"full"}/>
        <ModalContent
          backdropFilter={'blur(2px)'}
          bgColor={"whiteAlpha.200"}
        >
          {/*検索欄*/}
          <ModalHeader>
            <SearchFormControlInModal formControlProps={{marginTop: 7}}/>
            <ModalCloseButton tabIndex={-1}/>
          </ModalHeader>

          {/*検索結果*/}
          <SearchResultCards />
          <ModalFooter/>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SearchModal
