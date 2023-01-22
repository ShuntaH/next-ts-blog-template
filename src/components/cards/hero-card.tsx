import { Box, Card, CardBody, Link, Text } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
      margin={`${STYLES.gap} 0 calc(${STYLES.gap} * 2)`}
      overflow={"hidden"}
    >
      <CardBody>
        <Box height={"60px"}>
          <Text lineHeight={"60px"}>
            My GitHub
            {
              socialIcons.map((socialIcon, index) => (
                  <Link
                    href={socialIcon.href}
                    as={NextLink}
                    key={index}
                    target={"_blank"}
                    rel={"noopener"}
                    title={socialIcon.title}
                    fontSize={'4xl'}
                  >
                    <FontAwesomeIcon icon={socialIcon.icon}/>
                  </Link>
                )
              )}
          </Text>

        </Box>
      </CardBody>
    </Card>
  );
}

export default HeroCard
