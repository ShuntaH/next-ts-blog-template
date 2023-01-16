import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import type Author from '../interfaces/author'
import {Box, Container, Flex, Heading, Link} from "@chakra-ui/react";

type Props = {
    key: string
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
    marginBottom?: string | number
}

const ArticleHeading = ({
                            key,
                            title,
                            coverImage,
                            date,
                            excerpt,
                            author,
                            slug,
                            marginBottom = 10
                        }: Props) => {
    return (
        <Flex justifyContent={'center'} key={key} marginBottom={marginBottom}>
            <Box>
                <Heading as={'h3'} fontSize={'xl'} mb={4}>
                    <Link href={`/posts/${slug}`}>
                        {title}
                    </Link>
                </Heading>
                <Container mb={5} maxWidth={'60ch'}>{excerpt}</Container>
                <DateFormatter dateString={date}/>
                {/*<Box>*/}
                {/*  <Avatar name={author.name} picture={author.picture}/>*/}
                {/*</Box>*/}
            </Box>

            <Box>
                <CoverImage title={title} src={coverImage} slug={slug}/>
            </Box>
        </Flex>
    );
}

export default ArticleHeading
