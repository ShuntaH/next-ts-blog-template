import { NextSeo } from 'next-seo'
import { CardBody, CardHeader, Flex } from '@chakra-ui/react'
import BlurCard from 'components/common/blur-card'
import React from 'react'

interface Props {
  status_code: string
  error_messages: string
}

function ErrorCard ({ status_code, error_messages }: Props) {
  return (
  <Flex justifyContent={'center'}>
    <NextSeo
      title={status_code}
      description={error_messages}
      nofollow={true}
      noindex={true}
    />
    <BlurCard
      maxW={'lg'}
      minW={'md'}
      textAlign={'center'}
    >
      <CardHeader>{status_code}</CardHeader>
      <CardBody>{error_messages}</CardBody>
    </BlurCard>
  </Flex>
  )
}

export default ErrorCard
