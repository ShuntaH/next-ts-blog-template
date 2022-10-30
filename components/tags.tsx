import React from "react";
import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { SIDE_AREA_INNER_WIDTH } from "../lib/constants";


const Tags = () => {
  return (
    <Box>
      <Text align={"left"} fontWeight={"medium"}>Tags</Text>
      <Flex maxWidth={SIDE_AREA_INNER_WIDTH} flexWrap={"wrap"} py={3}>
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
