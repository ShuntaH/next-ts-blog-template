import {
  Box,
  Button,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
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
import ChakraFontAwesomeIcon from "../chakra-font-awesome-icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


type Props = {
  formControlProps?: FormControlProps
}

function Lorem(props: { count: number }) {
  return null;
}

const SearchForm = ({formControlProps}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const [inputValue, setInputValue] = React.useState('')
  // const handleInputValueChange = (event: React.MouseEvent<HTMLInputElement>) => setInputValue(event.target.value)
  const isError = inputValue === ''

  return (
    // todo terms about はよく使わないから footer に移動する
    // todo よく使う検索は header にする
    // todo tags 一覧はページに切り出す
    //
    <Box>
      <FormControl isInvalid={isError} {...formControlProps}>
        <InputGroup size='md'>
          <Input type='text' placeholder={"記事の検索"} onInput={onOpen}/>
          <InputRightElement width='4.5rem'>
            <ChakraFontAwesomeIcon
              _hover={{cursor: "pointer"}}
              icon={faMagnifyingGlass}
              onClick={onOpen}
            />
          </InputRightElement>
        </InputGroup>

        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <>
        <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          Some other content that'll receive focus on close.
        </Box>

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}

export default SearchForm
