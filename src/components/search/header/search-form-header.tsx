import { Box, BoxProps } from '@chakra-ui/react'
import React from "react";
import SearchModal from "components/search/search-modal";
import SearchFormControlHeader from "components/search/header/search-form-control-header";
import { DisclosureProvider } from "contexts/disclouserContext";


type Props = {
  boxProps?: BoxProps
}

function SearchFormHeader({boxProps}: Props) {
  return (
    <DisclosureProvider>
      <Box {...boxProps}>
        <SearchFormControlHeader />
        <SearchModal/>
      </Box>
    </DisclosureProvider>
  );
}

export default SearchFormHeader
