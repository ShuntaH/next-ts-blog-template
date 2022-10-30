import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { SIDE_AREA_INNER_WIDTH } from "../lib/constants";

const SearchForm = () => {
  return (
    <FormControl width={'100%'} maxWidth={SIDE_AREA_INNER_WIDTH}>
      <FormLabel>Search</FormLabel>
      <Input type='text'/>
      <FormHelperText>まだ検索機能未実装</FormHelperText>
    </FormControl>
  );
}

export default SearchForm
