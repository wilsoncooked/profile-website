import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from '../utils/htmlSerializer'
import { PrismicImage } from '../utils/PrismicTypes'
import Link from 'next/link'
import { formatDate } from '../utils/helpers'

type Props = {
  title: any
  uid: string
  datePublished: string
  excerpt?: any
  cardImage?: PrismicImage
}

export default function BlogPostCard({
  title,
  uid,
  datePublished,
  excerpt,
  cardImage
}: Props) {
  return (
    <Link href={`/blog/${uid}`}>
      <a className="max-w-xs">
        {title && (
          <span className="mt-2 uppercase font-medium tracking-wide">
            <RichText render={title} />
          </span>
        )}
        {datePublished && (
          <p className="mb-2 font-light tracking-widest">
            {formatDate(datePublished)}
          </p>
        )}
        {cardImage && (
          <div className="mt-4 mb-2">
            <Image
              src={cardImage.url}
              alt={cardImage.alt}
              width={cardImage.dimensions.width / 2}
              height={cardImage.dimensions.height / 2}
            />
          </div>
        )}
        {excerpt && (
          <span className="mt-2 text-justify tracking-wide">
            {<RichText render={excerpt} />}
          </span>
        )}
      </a>
    </Link>
  )
}
