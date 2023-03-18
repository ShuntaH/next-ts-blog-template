import { Box, Kbd, ModalBody, ModalBodyProps, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchResultCardInModal from 'components/search/modal/search-result-card-in-modal'
import { useSearch } from 'hooks/useFuse'

interface Props {
  modalBodyProps?: ModalBodyProps
}

function SearchResultCardsInModal ({ modalBodyProps }: Props) {
  const searchResultPosts = useSearch()
  return (
    <ModalBody paddingY={0} {...modalBodyProps}>
      {
        (searchResultPosts.length > 0)
          ? <Box marginY={3} textAlign={'right'}>
            <span><Kbd>tab</Kbd></span>
          </Box>
          : null
      }
      <VStack>
        {
          searchResultPosts.map((post, index) => {
            return (
              <SearchResultCardInModal
                searchResultPost={post}
                resultIndex={index}
                key={index}
              />
            )
          })
        }
      </VStack>
    </ModalBody>
  )
}

export default SearchResultCardsInModal
