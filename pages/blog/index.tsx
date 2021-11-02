import { useQuery, gql } from '@apollo/client'
import { useEffect } from 'react'
import { BlogPostsDocument } from '../../generated/graphql'
import { addApolloState, initializeApollo } from '../../lib/apolloClient'

export default function Blog() {
  const { loading, error, data } = useQuery(
    gql`
      ${BlogPostsDocument}
    `
  )
  useEffect(() => {
    if (!loading) {
      console.log(data)
    }
  }, [loading, data])
  return <div></div>
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      ${BlogPostsDocument}
    `
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  })
}
