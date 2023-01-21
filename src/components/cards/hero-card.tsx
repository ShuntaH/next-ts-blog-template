import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Link, Text } from '@chakra-ui/react'
import { BLOG_NAME, STYLES } from "../../lib/constants";
import NextLink from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";


type SocialIcon = {
  href: string,
  title: string,
  icon: IconProp
}

const HeroCard = () => {
  const socialIcons: SocialIcon[] = [
    {
      href: 'https://github.com/ShuntaH',
      title: 'GitHub',
      icon: faGithubAlt
    }
  ]

  return (
    <Card
      as={"article"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      minHeight={'320px'}
      margin={`${STYLES.gap} 0 calc(${STYLES.gap} * 2)`}
      overflow={"hidden"}
    >
      <CardHeader>
        <Heading as={"h1"} size='md'>{BLOG_NAME} 🍎</Heading>
      </CardHeader>

      <CardBody>
        <Text>My blog.</Text>
      </CardBody>

      <CardFooter>
        {
          socialIcons.map((socialIcon, index) => {
            return (
              <Link
                href={socialIcon.href}
                as={NextLink}
                key={index}
                target={"_blank"}
                rel={"noopener"}
                title={socialIcon.title}
              >
                <Box fontSize={'5xl'}>
                  <FontAwesomeIcon icon={socialIcon.icon}/>
                </Box>
              </Link>
            )
          })}
      </CardFooter>
    </Card>
  );
}

export default HeroCard
