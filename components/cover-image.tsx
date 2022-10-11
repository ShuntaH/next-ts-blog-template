import cn from 'classnames'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
      <Image src={src}
             alt={`Cover Image for ${title}`}
             boxSize='150px'
      />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
