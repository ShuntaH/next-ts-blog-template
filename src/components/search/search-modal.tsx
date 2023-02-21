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
  Kbd,
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
import Fuse from "fuse.js";
import { BadgeColors, BadgeColorValues, SearchKeys } from "interfaces/search";
import { SEARCH_MIN_CHARS, STYLES } from "lib/constants";
import { useRouter } from "next/router";
import { FilteredPost } from "interfaces/post";
import { useSearchInput } from "contexts/searchInputContext";
import { useFullTextSearch } from "contexts/fullTextSearchContext";
import SearchModalContentBodyHighlight from "components/search/search-modal-content-body-highlight";


type Props = {
  boxProps?: BoxProps
  onClose: () => void
  isOpen: boolean
  modalRef: React.MutableRefObject<null | HTMLInputElement>
}

const SearchModal: React.FC<Props> = ({
  boxProps,
  onClose,
  isOpen,
  modalRef
}) => {
  const [ searchResultPosts, setSearchResultPosts ] = useState<Fuse.FuseResult<FilteredPost>[]>([])
  const { searchInput, dispatch } = useSearchInput()
  const fuse = useFullTextSearch()
  const router = useRouter()

  const handleNavigation = async (
    e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
    slug: string
  ): Promise<void> => {
    await router.push(`/posts/${slug}`);
    onClose()
  }

  /**
   * 入力値から検索して最新の検索結果に更新する
   */
  const handleSearch = useCallback(async () => {
    if (!fuse) {
      return
    }
    if (searchInput.length < SEARCH_MIN_CHARS) {
      setSearchResultPosts([])
      return
    }
    const f = await fuse
    const result = f.search(searchInput)
    setSearchResultPosts(result)
  }, [ searchInput ])

  /**
   * マッチした文字列を含む値の key に応じてその key のバッチに色をつける
   */
  const handleBadgeColor = useCallback((key: string): BadgeColorValues => {
    if (Object.keys(BadgeColors).includes(key)) {
      const k = key as SearchKeys
      return BadgeColors[k]
    }
    return BadgeColors.title
  }, [ searchResultPosts ])

  useEffect(
    () => {
      // 入力文字数に関わらず更新する。制限すると入力文字数が検索を開始する文字数より少なくても
      // 前の検索結果を残してしまう。
      handleSearch()
      return console.log('result', searchResultPosts)
    },
    [ searchInput ]
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

          <ModalBody paddingY={0}>
            {
              searchResultPosts.length ?
                <Box marginY={3} textAlign={"right"}>
                  <span><Kbd>tab</Kbd></span>
                </Box>
                :
                null
            }
            <VStack>
              {
                searchResultPosts.map((post, index) => {
                  return (
                    <Card
                      onClick={(e) => handleNavigation(e, post.item.slug)}
                      onKeyPress={(e) => handleNavigation(e, post.item.slug)}
                      key={index}
                      tabIndex={index}
                      width={"full"}
                      variant={"elevated"}
                      backgroundColor={"blackAlpha.300"}
                      color={STYLES.textColorDarker}
                      _focusVisible={{
                        outlineColor: STYLES.colorLight
                      }}
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
                            if ([ 'title', 'slug' ].includes(match.key!)) {
                              // タイトルは必ず表示するのでループでは cardHeader で表示済みとしてスキップ
                              // slug は その記事に飛ぶために追加している。検索結果に表示する必要はない。
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
          <ModalFooter/>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SearchModal
