import { STYLES } from "lib/constants";
import { Card } from "@chakra-ui/react";
import React from "react";
import { CardLinkProps } from "interfaces/foundation";

function BlurCard({ children, ...props }: CardLinkProps) {
  return (
    <Card
      position={"relative"}
      bgColor={"transparent"}
      border={'2px'}
      borderColor={"rgba(51, 65, 85, 1)"}
      borderStyle={"solid"}
      marginBottom={STYLES.gap}
      padding={{base: STYLES.gapSm, md: STYLES.gap}}
      borderRadius={STYLES.radius}
      overflow={"hidden"}
      backdropFilter={'blur(4px)'}
      boxShadow={'0 0 #0000,0 0 #0000 ,0 0 #0000,0 0 #0000, 0 25px 50px -12px rgb(0 0 0 / 0.25)'}
      {...props}
    >
      {children}
    </Card>
  );
}

export default BlurCard;
