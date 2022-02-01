import { useRouter } from 'next/router'
import BlogPostCard from '../../components/BlogPostCard'
import BaseLayout from '../../layouts/BaseLayout'
import Client from '../../utils/prismicHelpers'
import Prismic from '@prismicio/client'

export default function Blog({ posts, previewRef, previewUrl }) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  console.log(posts)

  if (!posts) {
    return <p>error</p>
  }

  if (posts) {
    return (
      <BaseLayout>
        <div className="grid grid-cols-6 mt-40 mb-24 mx-12 gap-x-24">
          <div className="col-span-2 h-full flex flex-col justify-between">
            <h3 className="text-7xl font-serif font-bold  tracking-wider	my-4">
              Thoughts
            </h3>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-2">
            <div className="col-span-2 h-full flex flex-col justify-between">
              <div>
                <p className="text-lg tracking-wider mr-8">
                  Tech, creativity, nature and where ever life leads me.
                </p>
              </div>
              <div>
                <p className="my-2 font-light tracking-widest text-sm">
                  JANUARY 22
                </p>
                <p className="my-2 font-light tracking-widest text-sm">
                  DECEMBER 21
                </p>
                <p className="my-2 font-light tracking-widest text-sm">
                  NOVEMBER 21
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 gap-8 w-full max-w-7xl  grid grid-cols-3 ">
            {posts.results?.map((post, index) => (
              <BlogPostCard
                title={post?.data?.title}
                uid={post?.uid}
                datePublished={post?.data?.datePublished}
                excerpt={post?.data?.excerpt}
                cardImage={post?.data?.cardImage}
                key={index}
              />
            ))}
          </div>
        </div>
      </BaseLayout>
    )
  }
}

export async function getStaticProps({ params, previewData }) {
  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null
  // const postsQueryOptions = { orderings: '[my.blog_post.date desc]', ...refOption }
  const posts = await Client().query(
    Prismic.Predicates.at('document.type', 'blog_post')
  )
  return {
    props: {
      previewRef,
      posts,
      previewUrl: previewData ? previewData.ref : null
    }
  }
}
