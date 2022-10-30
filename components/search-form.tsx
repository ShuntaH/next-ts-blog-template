import { Box, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { SIDE_AREA_INNER_WIDTH } from "../lib/constants";

const SearchForm = () => {
  return (
    <Box width={SIDE_AREA_INNER_WIDTH}>
      <FormControl width={'100%'}>
        <FormLabel>Search</FormLabel>
        <Input type='text'/>
        <FormHelperText>まだ検索機能未実装</FormHelperText>
      </FormControl>
    </Box>

  );
}

export default SearchForm
