import { Box, BoxProps } from '@chakra-ui/react'
import React from "react";
import SearchModal from "components/search/modal/search-modal";
import SearchFormControlInHeader from "components/search/header/search-form-control-in-header";
import { SearchInputProvider } from "contexts/searchInputContext";
import { DisclosureProvider } from "contexts/disclouserContext";


type Props = {
  boxProps?: BoxProps
}

function SearchFormHeader({ boxProps }: Props) {
  return (
    <DisclosureProvider>
      <SearchInputProvider>
        <Box {...boxProps}>
          <SearchFormControlInHeader/>
          <SearchModal/>
        </Box>
      </SearchInputProvider>
    </DisclosureProvider>
  );
}

export default SearchFormHeader
