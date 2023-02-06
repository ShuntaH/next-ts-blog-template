import {
  Badge,
  Box,
  BoxProps,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Highlight,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from "react";
import SearchFormControl from "./search-form-control";
import { useFuse, useSearchInput } from "../../contexts/searchContexts";
import Fuse from "fuse.js";
import { FilteredPost } from "../../interfaces/post";
import RangeTuple = Fuse.RangeTuple;


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

  type Range = [number, number]
  const pickMatchString = (startToEnd: RangeTuple, value: string) => {
    return value.slice(startToEnd[0], startToEnd[1])
  }

  const getHighlightQueries = (indices: RangeTuple[], value: string) => {
    return indices.map((startToEnd) => {
      return pickMatchString(startToEnd, value)
    })
  }

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
                          post.matches!.map((match,index) => {
                            return (
                              <HStack key={index}>
                                <Badge colorScheme={"green"} fontSize={"xs"}>
                                  {match.key}
                                </Badge>
                                <Text>
                                  <Highlight
                                    query={
                                      match.indices.map(
                                        (range) => match.value!.slice(range[0], range[1] + 1)
                                      )}
                                    styles={{
                                      py: '0',
                                      bg: 'teal.100'
                                    }}
                                  >
                                    {match.value!}
                                  </Highlight>
                                </Text>
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
