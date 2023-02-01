import {
  Box,
  BoxProps,
  Button,
  FormControl,
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
  boxProps?: BoxProps
}

function Lorem(props: { count: number }) {
  return null;
}

const SearchForm = ({boxProps}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const [inputValue, setInputValue] = React.useState('')
  // const handleInputValueChange = (event: React.MouseEvent<HTMLInputElement>) => setInputValue(event.target.value)
  const isError = inputValue === ''

  return (
    <Box {...boxProps}>
      <FormControl
        width={{
          base:'full',
          md: '2xs'}}
      >
        <InputGroup size='md'>
          <Input
            type='text'
            placeholder={"Full-text search 全文検索"}
            onInput={onOpen}
            ref={finalRef}
          />
          <InputRightElement>
            <ChakraFontAwesomeIcon
              _hover={{cursor: "pointer"}}
              icon={faMagnifyingGlass}
              onClick={onOpen}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
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
