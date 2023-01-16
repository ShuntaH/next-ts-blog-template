import {Heading} from '@chakra-ui/react'
import Link from "next/link";

const Intro = () => {
    return (
        <Heading as='h1' size='xl' noOfLines={1} bgColor={'black'} color={"white"}>
            <Link href="/Users/mbp/develop/hskpg_blog/public">hskpg</Link>
        </Heading>
    )
}

export default Intro
