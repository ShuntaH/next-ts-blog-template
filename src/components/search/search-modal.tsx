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
import SearchFormControl from "./search-form-control";
import SearchResultCards from "components/search/search-result-cards";


type Props = {
  boxProps?: BoxProps
  onClose: () => void
  isOpen: boolean
  modalRef: React.MutableRefObject<null | HTMLInputElement>
}

function SearchModal ({
  boxProps,
  onClose,
  isOpen,
  modalRef
}: Props) {

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
          <ModalHeader>
            <SearchFormControl
              formControlProps={{ marginTop: 7 }}
              refOrFunc={modalRef}
            />
            <ModalCloseButton tabIndex={-1}/>
          </ModalHeader>
          <SearchResultCards onClose={onClose} />
          <ModalFooter/>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SearchModal
