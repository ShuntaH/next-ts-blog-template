import { Box, BoxProps } from '@chakra-ui/react'
import React from "react";
import SearchModal from "components/search/search-modal";
import SearchFormControlHeader from "components/search/header/search-form-control-header";
import { DisclosureProvider } from "contexts/disclouserContext";
import { SearchInputProvider } from "contexts/searchInputContext";


type Props = {
  boxProps?: BoxProps
}

function SearchFormHeader({boxProps}: Props) {
  return (
    <SearchInputProvider>
      <DisclosureProvider>
        <Box {...boxProps}>
          <SearchFormControlHeader />
          <SearchModal/>
        </Box>
      </DisclosureProvider>
    </SearchInputProvider>
  );
}

export default SearchFormHeader
