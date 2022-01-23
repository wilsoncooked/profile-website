import { GetStaticPaths } from 'next'
import BaseLayout from '../../layouts/BaseLayout'
import { queryRepeatableDocuments } from '../../utils/queries'
import Client from '../../utils/prismicHelpers'
import { useRouter } from 'next/router'
import SliceZone from '../../slices/SliceZone'

const BlogPost = ({ post, previewRef, previewUrl }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  if (!post.id) {
    return <p>error</p>
  }

  if (post && post.data.slices) {
    return (
      <BaseLayout>
        <SliceZone sliceZone={post.data.slices} />
      </BaseLayout>
    )
  }
}

export async function getStaticProps({ params, previewData }) {
  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null
  const post =
    (await Client().getByUID('blog_post', params.slug, {
      ...refOption,
      fetchLinks: []
    })) || {}

  return {
    props: {
      previewRef,
      post,
      previewUrl: previewData ? previewData.ref : null
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'blog_post'
  )
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: true
  }
}

export default BlogPost
