import { Card, CardBody, CardFooter, CardHeader, Heading, Link } from '@chakra-ui/react'
import { BLOG_DISCRIPTION, STYLES } from "../lib/constants";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import NextLink from "next/link";
import ChakraFontAwesomeIcon from "./chakra-font-awesome-icon";
import { SocialIcon } from "../interfaces/icon";

const IntroCard = () => {
  const githubIcon: SocialIcon =
    {
      href: 'https://github.com/ShuntaH',
      title: 'GitHub',
      icon: faGithubAlt
    }

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
        <Link
          href={githubIcon.href}
          as={NextLink}
          target={"_blank"}
          rel={"noopener"}
          title={githubIcon.title}
          fontSize={'4xl'}
        >
          <ChakraFontAwesomeIcon icon={githubIcon.icon}/>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default IntroCard
