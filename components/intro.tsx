import { CMS_NAME } from '../lib/constants'
import { Heading, Text } from '@chakra-ui/react'
import Link from "next/link";

const Intro = () => {
  return (
    <section className="">
        イントロの初め
        <Heading as='h1' size='4xl' noOfLines={1}>
            <Link href="/">hskpg</Link>
        </Heading>

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">

      </h4>イントロの終わり
    </section>
  )
}

export default Intro
