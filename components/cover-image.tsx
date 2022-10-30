import { Image, Link } from '@chakra-ui/react'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({title, src, slug}: Props) => {
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
