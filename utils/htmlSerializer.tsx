import { Elements } from 'prismic-reactjs'

const randomKey = Math.floor(Math.random() * 100).toString()

export const htmlSerializer = (type, element, content, children) => {
  switch (type) {
    case Elements.heading4:
      return (
        <h4 key={randomKey} className="text-xl font-medium">
          {children}
        </h4>
      )

    case Elements.paragraph:
      return (
        <p key={randomKey} className="text-lg">
          {children}
        </p>
      )

    default:
      return null
  }
}
