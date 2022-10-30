import SearchForm from "./search-form";
import { Container } from "@chakra-ui/react";

const SideArea = () => {
  return (
    <Container width={'100%'} py={10}>
      <SearchForm></SearchForm>
    </Container>


  );
}

export default SideArea
