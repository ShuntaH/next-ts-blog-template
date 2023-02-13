import { Image, Link } from '@chakra-ui/react'
import React from "react";

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage: React.VFC<Props> = ({title, src, slug}) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      boxSize='100px'
    />
  )
  return (
    <div>
      {slug ? (
        <Link href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

export default CoverImage
