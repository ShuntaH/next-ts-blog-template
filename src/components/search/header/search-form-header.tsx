import { Box, BoxProps } from '@chakra-ui/react'
import React from "react";
import SearchModal from "components/search/modal/search-modal";
import SearchFormControlInHeader from "components/search/header/search-form-control-in-header";
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
          <SearchFormControlInHeader />
          <SearchModal/>
        </Box>
      </DisclosureProvider>
    </SearchInputProvider>
  );
}

export default SearchFormHeader
