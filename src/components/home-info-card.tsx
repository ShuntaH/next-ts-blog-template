import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'

type Menu = {
  href: string,
  content: string
}

const HomeInfoCard = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>

      <CardFooter>
      </CardFooter>

    </Card>
  );
}

export default HomeInfoCard
