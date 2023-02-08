import {
  Badge,
  Box,
  BoxProps,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
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
import { BadgeColors, BadgeColorValues, SearchKeys } from "../../interfaces/search";
import { SEARCH_MIN_CHARS } from "../../lib/constants";


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
    if(valueInput.length < SEARCH_MIN_CHARS) {
      setSearchResultPosts([])
      return
    }
    const result = fuse.search(valueInput)
    setSearchResultPosts(result)
  }, [ valueInput ])

  const handleBadgeColor = useCallback((key: string): BadgeColorValues => {
    if (Object.keys(BadgeColors).includes(key)) {
      const k = key as SearchKeys
      return BadgeColors[k]
    }
    return BadgeColors.title
  }, [ searchResultPosts ])

  useEffect(
    () => {
      handleSearch()
      return console.log('result', searchResultPosts)
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
        colorScheme={"red"}
      >
        <ModalOverlay width={"full"}/>

        <ModalContent>
          <ModalHeader>
            <SearchFormControl
              formControlProps={{ marginTop: 7 }}
              refOrFunc={modalRef}
            />
            <ModalCloseButton/>
          </ModalHeader>

          <ModalBody paddingY={0}>
            <VStack>
              {
                searchResultPosts.map((post, index) => {
                  return (
                    <Card
                      key={index}
                      tabIndex={index}
                      width={"full"}
                      variant={"elevated"}
                      backgroundColor={"blackAlpha.300"}
                      color={"gray.300"}
                    >
                      <CardHeader
                        width={"full"}
                        paddingX={1}
                        paddingTop={1}
                        paddingBottom={0}
                      >
                        <Flex
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Flex width={'70px'} alignItems={"center"}>
                            <Badge
                              colorScheme={handleBadgeColor('title')}
                              fontSize={"xs"}>
                              title
                            </Badge>
                          </Flex>
                          <Heading
                            as={'h4'}
                            fontSize={"xs"}
                            fontWeight={"normal"}
                            flexGrow={1}
                            textAlign={"left"}
                            paddingLeft={2}
                          >
                            {post.item.title}
                          </Heading>
                        </Flex>
                      </CardHeader>

                      <CardBody
                        width={"full"}
                        paddingX={1}
                        paddingBottom={1}
                        paddingTop={0}
                        fontSize={"xs"}
                      >
                        {
                          post.matches!.map((match, index) => {
                            if(match.key === 'title') {
                              // タイトルは必ず表示するのでループでは cardHeader で表示済みとしてスキップ
                              return null
                            }
                            return <Box key={index}>
                              <Flex
                                justifyContent={"space-between"}
                                alignItems={"start"}
                                paddingY={1}
                              >
                                <Flex width={'70px'} alignItems={"center"}>
                                  <Badge
                                    colorScheme={handleBadgeColor(match.key!)}
                                    fontSize={"xs"}>
                                    {match.key}
                                  </Badge>
                                </Flex>
                                <SearchModalContentBodyHighlight
                                  match={match}
                                  textProps={{ flexGrow: 1, paddingLeft: 2 }}
                                />
                              </Flex>
                              {
                                // 最後には下線部をつけない
                                (post.matches!.length - 1) === index ?
                                  null : <Divider borderColor={"gray.600"}/>
                              }
                            </Box>
                          })}
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
