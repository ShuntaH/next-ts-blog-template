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
import SearchFormModal from "components/search/search-form-modal";


type Props = {
  boxProps?: BoxProps
}

function SearchModal ({ boxProps }: Props) {
  const { isOpen, onClose, modalRef } = useDisclosureContext()
  return (
    <Box {...boxProps}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={modalRef}
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
            <SearchFormModal/>
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
