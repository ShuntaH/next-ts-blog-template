import SearchForm from "./search-form";
import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import Tags from "./tags";


const SideArea = () => {
  return (
    <Container width={'100%'} py={10}>
      <VStack width={'100%'} spacing='100px'>
        <SearchForm></SearchForm>
        <Tags></Tags>
      </VStack>
    </Container>


  );
}

export default SideArea
