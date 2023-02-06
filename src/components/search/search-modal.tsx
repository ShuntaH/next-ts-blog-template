import {
  Badge,
  Box,
  BoxProps,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from "react";
import SearchFormControl from "./search-form-control";
import { useFuse, useSearchInput } from "../../contexts/searchContexts";
import Fuse from "fuse.js";
import { FilteredPost } from "../../interfaces/post";
import SearchModalContentBodyHighlight from "./search-modal-content-body-highlight";


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

  const [ searchResultPosts, setSearchResultPosts ] = useState<Fuse.FuseResult<FilteredPost>[]>([])
  const fuse = useFuse() as Fuse<FilteredPost>
  const { valueInput, dispatch } = useSearchInput()

  const handleSearch = useCallback(() => {
    if (!valueInput) {
      console.log('入力文字がありません')
      return
    }
    const result = fuse.search(valueInput)
    console.log('result', result)
    setSearchResultPosts(result)
  }, [ valueInput ])


  useEffect(
    () => {
      console.log('------handleSearch------')
      handleSearch()
      console.log('^^^^^^handleSearch^^^^^^')
    },
    [ handleSearch ]
  )

  return (
    <Box {...boxProps}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={modalRef}
        returnFocusOnClose={false}
        scrollBehavior={"inside"}
      >
        <ModalOverlay/>

        <ModalContent>
          <ModalHeader>
            <SearchFormControl
              formControlProps={{ marginTop: 6 }}
              refOrFunc={modalRef}
            />
            <ModalCloseButton/>
          </ModalHeader>

          <ModalBody paddingY={0}>
            <VStack>
              {
                searchResultPosts.map((post, index) => {
                  return (
                    <Card key={index} width={"full"}>
                      <CardHeader width={"full"} paddingX={1} paddingY={1}>
                        <Heading
                          as={'h4'}
                          textAlign={"left"}
                          fontWeight={"normal"}
                          size='sm'
                          color={"gray.200"}
                          fontSize={"sm"}
                        >
                          {post.item.title}
                        </Heading>
                      </CardHeader>

                      <CardBody
                        width={"full"}
                        paddingX={1}
                        paddingY={1}
                        fontSize={"xs"}
                      >
                        {
                          post.matches!.map((match, index) => {
                            return (
                              <HStack key={index}>
                                <Badge colorScheme={"green"} fontSize={"xs"}>
                                  {match.key}
                                </Badge>
                                <SearchModalContentBodyHighlight match={match}/>
                              </HStack>
                            )
                          })
                        }
                      </CardBody>
                    </Card>
                  )
                })}

            </VStack>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SearchModal
