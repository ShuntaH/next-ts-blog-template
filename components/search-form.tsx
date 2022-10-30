import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const SearchForm = () => {
  return (
    <FormControl width={'100%'} maxWidth={'280px'}>
      <FormLabel>Search</FormLabel>
      <Input type='text'/>
      <FormHelperText>まだ検索機能未実装</FormHelperText>
    </FormControl>
  );
}

export default SearchForm
