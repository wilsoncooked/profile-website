import { GetStaticPaths } from 'next'
import BaseLayout from '../../layouts/BaseLayout'
import { queryRepeatableDocuments } from '../../utils/queries'
import Client from '../../utils/prismicHelpers'
import { useRouter } from 'next/router'
import SliceZone from '../../slices/SliceZone'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

const BlogPost = ({ post, previewRef, previewUrl }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  console.log(post)

  if (!post.id) {
    return <p>error</p>
  }

  if (post && post.data.slices) {
    return (
      <BaseLayout>
        <div className="grid grid-cols-6 mt-40 mb-24 mx-12 gap-x-8">
          <div className="col-span-2 h-full flex flex-col justify-between">
            <Link href={'/blog'}>
              <a>blog</a>
            </Link>
            {post.data.title && (
              <span className="text-6xl font-serif font-bold  tracking-wider	my-4 text-right">
                <RichText render={post.data.title} />
              </span>
            )}
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-2 h-full flex flex-col justify-between"></div>
          <div className="col-span-4 w-3/4">
            <div className="h-56 border-l-2 mb-6"></div>
            <SliceZone sliceZone={post.data.slices} />
          </div>
        </div>
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
