import { Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react'
import { BLOG_DISCRIPTION, STYLES } from "lib/constants";

const IntroCard = () => {
  return (
    <Card
      as={"article"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      margin={`${STYLES.gap} 0 calc(${STYLES.gap} * 2)`}
      overflow={"hidden"}
      boxShadow={"none"}
    >
      <CardHeader as={"header"} paddingBottom={0}>
        <Heading as={"h3"} color={"gray.600"} marginBottom={5} fontSize={"sm"}>
          {BLOG_DISCRIPTION}
        </Heading>
      </CardHeader>

      <CardBody paddingTop={0} paddingBottom={0}>
      </CardBody>

      <CardFooter
        as={"footer"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
      </CardFooter>
    </Card>
  );
}

export default IntroCard
