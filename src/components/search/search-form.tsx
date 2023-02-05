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

const SearchForm = ({boxProps}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = React.useState('')
  const isError = inputValue === ''
  console.log(`isOpen ${isOpen}`)
  const modalRef = React.useRef(null)

  const handleOnOpen = (e: React.MouseEvent<HTMLInputElement>) => {
    // もし複数種類のイベントでこれが発火していたら、ここで type の判定をして
    // どれかのイベントを止める
    if(e.type === 'input') {
      // console.log('event type', e.type)
      e.currentTarget.value = ''
      e.preventDefault()
    }
    onOpen()
  }

  return (
    <Box {...boxProps}>
      <SearchFormControl refOrFunc={handleOnOpen} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={modalRef}
        returnFocusOnClose={false}
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

          </ModalHeader>

          <ModalBody>
            <SearchFormControl
              formControlProps={{paddingY: 3}}
              refOrFunc={modalRef}
            />
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
