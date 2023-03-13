import { NextSeo } from 'next-seo'
import { CardBody, CardHeader, Flex } from '@chakra-ui/react'
import BlurCard from 'components/common/blur-card'
import React from 'react'

interface Props {
  statusCode: string
  errorMessage: string
}

function ErrorCard ({ statusCode, errorMessage }: Props) {
  return (
  <Flex justifyContent={'center'}>
    <NextSeo
      title={statusCode}
      description={errorMessage}
      nofollow={true}
      noindex={true}
    />
    <BlurCard
      maxW={'lg'}
      minW={'md'}
      textAlign={'center'}
    >
      <CardHeader>{statusCode}</CardHeader>
      <CardBody>{errorMessage}</CardBody>
    </BlurCard>
  </Flex>
  )
}

export default ErrorCard
