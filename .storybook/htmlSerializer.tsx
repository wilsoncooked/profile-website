import { NextImage } from './nextImage'
import { Elements } from 'prismic-reactjs'

const randomKey = () => Math.floor(Math.random() * 100).toString()

export const htmlSerializerDark = (type, element, content, children) => {
  switch (type) {
    case Elements.image:
      return (
        <figure key={element.url} className="mx-auto">
          <NextImage
            src={element.url}
            width={element.dimensions.width}
            height={element.dimensions.height}
            alt={element.alt}
            unoptimized
          />
        </figure>
      )

    default:
      return null
  }
}
