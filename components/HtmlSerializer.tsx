import { Elements } from 'prismic-reactjs'
import Image from 'next/image'

export default function HtmlSerializer(type, element, content, children) {
  switch (type) {
    case Elements.image:
      return (
        <figure key={element.url} className="mx-auto">
          <Image
            src={element.url}
            width={element.dimensions.width}
            height={element.dimensions.height}
            layout="responsive"
            alt={element.alt}
          />
          {element.alt && <figcaption>{element.alt}</figcaption>}
        </figure>
      )

    case Elements.paragraph:
      return <p className="">{children}</p>

    // case Elements.heading3:
    //   return <h3 className="text-current">{children}</h3>

    case Elements.paragraph:
      return <p className="my-4 tracking-wider text-lg">{children}</p>

    case Elements.hyperlink:
      return (
        <a
          href={element.data.url}
          target={element.data.target ? element.data.target : ''}
          rel={element.data.target ? 'noreferrer' : ''}
          className="font-semibold cursor-pointer "
        >
          {children}
        </a>
      )

    case Elements.strong:
      return <strong className="font-sans-medium">{children}</strong>

    default:
      return null
  }
}
