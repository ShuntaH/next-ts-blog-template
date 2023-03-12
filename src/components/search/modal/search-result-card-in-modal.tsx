import { Badge, Box, Card, CardBody, CardHeader, CardProps, Divider, Flex, Heading } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { STYLES } from "lib/constants";
import SearchModalContentBodyHighlightInModal
  from "components/search/modal/search-modal-content-body-highlight-in-modal";
import { useRouter } from "next/router";
import { FilteredPost } from "interfaces/post";
import Fuse from "fuse.js";
import { BadgeColors, BadgeColorValues, SearchKeys } from "interfaces/search";
import { useDisclosureContext } from "contexts/disclouserContext";

type Props = {
  cardProps?: CardProps
  searchResultPost: Fuse.FuseResult<FilteredPost>,
  index: number
}

function SearchResultCardInModal({ searchResultPost, cardProps, index }: Props) {
  const router = useRouter()
  const { onClose } = useDisclosureContext()

  const handleNavigation = async (
    e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
    slug: string
  ): Promise<void> => {
    await router.push(`/posts/${slug}`);
    onClose()
  }

  /**
   * マッチした文字列を含む値の key に応じてその key のバッチに色をつける
   */
  const handleBadgeColor = useCallback((key: string): BadgeColorValues => {
    if (Object.keys(BadgeColors).includes(key)) {
      const k = key as SearchKeys
      return BadgeColors[k]
    }
    return BadgeColors.title
  }, [ searchResultPost.item.slug ])

  return (
    <Card
      onClick={(e) => handleNavigation(e, searchResultPost.item.slug)}
      onKeyPress={(e) => handleNavigation(e, searchResultPost.item.slug)}
      key={index}
      tabIndex={index}
      width={"full"}
      variant={"elevated"}
      backgroundColor={"blackAlpha.300"}
      color={STYLES.textColorDarker}
      _focusVisible={{
        outlineColor: STYLES.colorLight
      }}
      {...cardProps}
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
            {searchResultPost.item.title}
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
          searchResultPost.matches!.map((match, index) => {
            if ([ 'title', 'slug' ].includes(match.key!)) {
              // タイトルは必ず表示するのでループでは cardHeader で表示済みとしてスキップ
              // slug は その記事に飛ぶために追加している。検索結果に表示する必要はない。
              return null
            }
            return (
              <Box key={index}>
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
                <SearchModalContentBodyHighlightInModal
                  match={match}
                  textProps={{ flexGrow: 1, paddingLeft: 2 }}
                />
              </Flex>
              {
                // 最後には下線部をつけない
                (searchResultPost.matches!.length - 1) === index ?
                  null
                  :
                  <Divider borderColor={"gray.600"}/>
              }
            </Box>
            )
          })
        }
      </CardBody>
    </Card>
  )
}

export default SearchResultCardInModal
