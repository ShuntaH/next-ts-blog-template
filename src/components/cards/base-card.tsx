import { Card } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";


type Props = {
  children: React.ReactNode
}

const BaseCard = ({ children }: Props) => {
  return (
    <Card
      as={"article"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      minHeight={'320px'}
      margin={`var(${STYLES.gap})0 calc(var(${STYLES.gap}) * 2)`}
      overflow={"hidden"}
    >
      {children}
    </Card>
  );
}

export default BaseCard
