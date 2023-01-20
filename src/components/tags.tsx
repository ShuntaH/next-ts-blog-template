import React from "react";
import { Badge, Box, Flex, Text } from "@chakra-ui/react";


const Tags = () => {
  return (
    <Box>
      <Text align={"left"} fontWeight={"medium"}>Tags</Text>
      <Flex flexWrap={"wrap"} py={3}>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
        <Badge variant='outline' colorScheme='green' mr={'10px'} mb={'10px'}>
          Default
        </Badge>
      </Flex>
    </Box>

  );
}

export default Tags
