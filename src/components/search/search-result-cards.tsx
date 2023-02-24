import { Box, Kbd, ModalBody, ModalBodyProps, VStack } from '@chakra-ui/react'
import React from "react";
import SearchResultCard from "components/search/search-result-card";
import { useSearch } from "hooks/useFuse";
import { useDisclosureContext } from "contexts/disclouserContext";


type Props = {
  modalBodyProps?: ModalBodyProps
}

function SearchResultCards({ modalBodyProps }: Props) {

  const searchResultPosts = useSearch()
  const { onClose } = useDisclosureContext()

  return (
    <ModalBody paddingY={0} {...modalBodyProps}>
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
              <SearchResultCard
                onClose={onClose}
                searchResultPost={post}
                index={index}
              />
            )
          })
        }
      </VStack>
    </ModalBody>
  );
}

export default SearchResultCards
