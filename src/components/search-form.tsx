import { Box, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const SearchForm = () => {
  return (
    <Box>
      <FormControl width={'100%'}>
        <FormLabel>Search</FormLabel>
        <Input type='text'/>
        <FormHelperText>まだ検索機能未実装</FormHelperText>
      </FormControl>
    </Box>

  );
}

export default SearchForm
