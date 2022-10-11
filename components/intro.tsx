import { CMS_NAME } from '../lib/constants'
import { Heading, Text } from '@chakra-ui/react'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <Heading as='h1' size='4xl' noOfLines={1}>
            <a href="/">hskpg</a>
        </Heading>

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">

      </h4>
    </section>
  )
}

export default Intro
