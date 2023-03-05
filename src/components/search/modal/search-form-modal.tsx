import { Box, BoxProps } from '@chakra-ui/react'
import React from "react";
import SearchFormControlModal from "components/search/modal/search-form-control-modal";


type Props = { boxProps?: BoxProps }

function SearchFormModal({boxProps}: Props) {
  return (
      <Box {...boxProps}>
        <SearchFormControlModal formControlProps={{ marginTop: 7 }}/>
      </Box>
  );
}

export default SearchFormModal
