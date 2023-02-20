import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { BACKGROUND_IMAGE_PATH } from "lib/constants";
import { useBlurBackground } from "hooks/useBlurBackground";

const BlurBackground: React.FC = () => {
  const blurOpacity = useBlurBackground()

  return (
    <Box>
      <Box
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        height={"full"}
        zIndex={-10}
      >
        {
          BACKGROUND_IMAGE_PATH ?
            (
              <Image
                position={"fixed"}
                top={0}
                right={0}
                left={0}
                width={"full"}
                height={"full"}
                htmlWidth={'100%'}
                htmlHeight={'100%'}
                src={BACKGROUND_IMAGE_PATH}
                fit={"cover"}
                align={"center"}
              />
            )
            :
            null
        }
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          mixBlendMode={"normal"}
          backgroundImage={"linear-gradient(to top, rgba(30, 41, 59, 1), rgba(30, 41, 59, 0))"}
        />
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          mixBlendMode={"normal"}
          backgroundImage={"linear-gradient(to top, rgba(30, 41, 59, 1), rgba(30, 41, 59, 1))"}
          opacity={0.6}
        />
      </Box>
      <Box
        display={"block"}
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        zIndex={-10}
        width={"full"}
        height={"full"}
        backdropFilter={'blur(40px)'}
        opacity={blurOpacity}
      />
    </Box>
  )}


export default BlurBackground
