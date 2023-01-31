import { FormControl, FormControlProps, Input } from '@chakra-ui/react'


type Props = {
  inputString: string
  formControlProps?: FormControlProps
}

const SearchForm = ({inputString, formControlProps}: Props) => {
  return (
        <FormControl {...formControlProps}>
          <Input type='text' placeholder={"記事の検索"}/>
        </FormControl>
  );
}

export default SearchForm
