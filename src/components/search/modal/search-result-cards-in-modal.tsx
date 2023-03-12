import { Box, Kbd, ModalBody, ModalBodyProps, VStack } from '@chakra-ui/react'
import React from "react";
import SearchResultCardInModal from "components/search/modal/search-result-card-in-modal";
import { useSearch } from "hooks/useFuse";
import { useDisclosureContext } from "contexts/disclouserContext";


type Props = {
  modalBodyProps?: ModalBodyProps
}

function SearchResultCardsInModal({ modalBodyProps }: Props) {

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
              <SearchResultCardInModal
                onClose={onClose}
                searchResultPost={post}
                index={index}
                key={index}
              />
            )
          })
        }
      </VStack>
    </ModalBody>
  );
}

export default SearchResultCardsInModal
