import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
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
import SearchFormControl from "./search-form-control";


type Props = {
  boxProps?: BoxProps
}

function Lorem(props: { count: number }) {
  return null;
}

const SearchForm = ({boxProps}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = React.useState('')
  // const handleInputValueChange = (event: React.MouseEvent<HTMLInputElement>) => setInputValue(event.target.value)
  const isError = inputValue === ''
  
  return (
    <Box {...boxProps}>
      <SearchFormControl modalOpenFunc={onOpen} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc
        closeOnOverlayClick
        returnFocusOnClose
        autoFocus
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              <Heading as={'h3'} fontSize={"md"}>
                Search results
              </Heading>
              <ModalCloseButton />
            </Flex>
            <SearchFormControl />
          </ModalHeader>

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
