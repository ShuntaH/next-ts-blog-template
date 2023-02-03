import {
  Box,
  BoxProps,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import React from "react";
import SearchInput from "./search-input";


type Props = {
  boxProps?: BoxProps
}

function Lorem(props: { count: number }) {
  return null;
}

const SearchForm = ({boxProps}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const initialRef = React.useRef(null)
  const [inputValue, setInputValue] = React.useState('')
  // const handleInputValueChange = (event: React.MouseEvent<HTMLInputElement>) => setInputValue(event.target.value)
  const isError = inputValue === ''

  return (
    <Box {...boxProps}>
      <SearchInput
        isOpen={isOpen}
        onOpen={onOpen}
        finalRef={finalRef}
      />

      <Modal
        finalFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Search results
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SearchForm
