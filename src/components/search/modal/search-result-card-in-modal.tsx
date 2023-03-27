import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Divider,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import React, { useCallback, useMemo } from 'react'
import { STYLES } from 'lib/constants'
import SearchModalContentBodyHighlightInModal
  from 'components/search/modal/search-modal-content-body-highlight-in-modal'
import { useRouter } from 'next/router'
import { FilteredPost } from 'interfaces/post'
import Fuse from 'fuse.js'
import { BadgeColors, BadgeColorValues, SearchKeys } from 'interfaces/search'
import { useDisclosureContext } from 'contexts/disclouserContext'
import NextLink from "next/link";

interface Props {
  cardProps?: CardProps
  searchResultPost: Fuse.FuseResult<FilteredPost>
  resultIndex: number
}

/**
 * モーダル内の検索結果カード
 * @param searchResultPost
 * @param cardProps
 * @param resultIndex
 */
function SearchResultCardInModal ({ searchResultPost, cardProps, resultIndex }: Props) {
  const router = useRouter()
  const { onClose } = useDisclosureContext()


  const postHref = useMemo(
    () => {
      return `/posts/${searchResultPost.item.slug}`
    },
    [searchResultPost.item.slug]
  )

  /**
   * ヒットした記事ページに遷移する
   */
  const handleNavigationByKeyboard: React.KeyboardEventHandler<HTMLDivElement> = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push(postHref).then(() => onClose())
    }
  }

  const handleNavigationByClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
      router.push(postHref).then(() => onClose())
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
  }, [])

  return (
    <LinkBox width={"full"}>
      <Card
        onKeyUp={handleNavigationByKeyboard}
        onClick={handleNavigationByClick}
        tabIndex={resultIndex}
        width={'full'}
        variant={'elevated'}
        backgroundColor={'blackAlpha.900'}
        color={STYLES.textColorDarker}
        _focusVisible={{ outlineColor: STYLES.colorLight }}
        {...cardProps}
      >
        <CardHeader
          width={'full'}
          paddingX={1}
          paddingTop={1}
          paddingBottom={0}
        >
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Flex width={'70px'} alignItems={'center'}>
              <Badge colorScheme={handleBadgeColor('title')} fontSize={'xs'}>
                title
              </Badge>
            </Flex>

            <Heading
              as={'h3'}
              fontSize={'xs'}
              fontWeight={'normal'}
              flexGrow={1}
              textAlign={'left'}
              paddingLeft={2}
            >
              <LinkOverlay
                as={NextLink}
                href={postHref}
                tabIndex={-1}
              >
                {searchResultPost.item.title}
              </LinkOverlay>
            </Heading>
          </Flex>
        </CardHeader>

        <CardBody
          width={'full'}
          paddingX={1}
          paddingBottom={1}
          paddingTop={0}
          fontSize={'xs'}
        >
          {
            searchResultPost.matches!.map(
              (match, matchIndex) => {
              /*
               * タイトルは必ず表示するのでループでは cardHeader で表示済みとしてスキップ。
               * slug は その記事に飛ぶために追加している。検索結果に表示する必要はない。
               */
              if (['title', 'slug'].includes(match.key!)) return null;

              return (
                <Box key={matchIndex}>
                  <Flex
                    justifyContent={'space-between'}
                    alignItems={'start'}
                    paddingY={1}
                  >
                    <Flex width={'70px'} alignItems={'center'}>
                      <Badge colorScheme={handleBadgeColor(match.key!)} fontSize={'xs'}>
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
                    (searchResultPost.matches!.length - 1) === matchIndex
                      ? null
                      : <Divider borderColor={'gray.600'}/>
                  }
                </Box>
              )
            })
          }
        </CardBody>
      </Card>
    </LinkBox>
  )
}

export default SearchResultCardInModal
