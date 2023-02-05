import {
  Box,
  BoxProps,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import React from "react";
import SearchFormControl from "./search-form-control";


type Props = {
  boxProps?: BoxProps
  onClose: () => void
  isOpen: boolean
  modalRef: React.MutableRefObject<null | HTMLInputElement>
}

const SearchModal = ({
  boxProps,
  onClose,
  isOpen,
  modalRef
}: Props) => {

  return (
    <Box {...boxProps}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={modalRef}
        returnFocusOnClose={false}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <SearchFormControl
              formControlProps={{paddingY: 3, marginTop: 5}}
              refOrFunc={modalRef}
            />
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
              <Heading as={'h3'} fontSize={"md"} textAlign={"center"}>
                Search results
              </Heading>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SearchModal
