import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import { STYLES } from "../lib/constants";

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
    >
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>

      <CardBody lineHeight={1.6} overflow={"hidden"}>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>

      <CardFooter>
      </CardFooter>

    </Card>
  );
}

export default HomeInfoCard
