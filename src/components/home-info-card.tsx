import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Link, Text } from '@chakra-ui/react'
import { BLOG_NAME, STYLES } from "../lib/constants";
import NextLink from "next/link";

type Menu = {
  href: string,
  content: string
}

const HomeInfoCard = () => {
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
      <CardHeader>
        <Heading as={"h1"} size='md'>{BLOG_NAME} 🍎</Heading>
      </CardHeader>

      <CardBody>
        <Text>My blog.</Text>
      </CardBody>

      <CardFooter>
        <Box>
          <Link href={} as={NextLink}></Link>
        </Box>
      </CardFooter>

    </Card>
  );
}

export default HomeInfoCard
