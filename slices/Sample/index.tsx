import React from 'react'
import { RichText } from 'prismic-reactjs'

const Sample = ({ slice }) => (
  <section>
    <RichText render={slice.primary.title} />
    <RichText render={slice.primary.description} />
  </section>
)

export default Sample
