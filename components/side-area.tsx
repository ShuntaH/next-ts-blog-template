import SearchForm from "./search-form";
import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Tags from "./tags";


const SideArea = () => {
  return (
    <VStack width={'100%'} spacing='100px'>
      <Flex direction={"row-reverse"}>
        <SearchForm></SearchForm>
      </Flex>
      <Flex direction={"row-reverse"}>
        <Tags></Tags>
      </Flex>
    </VStack>
  );
}

export default SideArea
