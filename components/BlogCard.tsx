import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BlogPost } from '../types/blog'

export function BlogCard({
  slug,
  coverImage,
  title,
  tags,
  excerpt,
  datePublished,
  minutesToRead
}: Partial<BlogPost>) {
  const [showExcept, setShowExcept] = useState(false)
  return (
    <Link href={`/blog/${slug}`}>
      <a className="block  my-4 relative">
        <div
          onMouseEnter={() => setShowExcept(true)}
          onMouseLeave={() => setShowExcept(false)}
        >
          <Image src={coverImage.url} alt={coverImage.alt} layout="fill" />
          <div
            className={`${
              showExcept ? 'opacity-1 duration-200' : 'opacity-0 duration-200'
            } absolute  top-2 `}
          >
            {excerpt && (
              <p>
                <mark className=" text-indigo-dye bg-champaign bg-opacity-90 tracking-wide">
                  {excerpt}
                </mark>
              </p>
            )}
          </div>
          <div className="  text-indigo-dye ">
            <div className="flex w-full items-baseline font-medium">
              {/* <p className="tracking-wide">{formatDate(datePublished)}</p> */}
              <p className="tracking-wide mx-2">-</p>
              <p className="tracking-wide">{minutesToRead} min read</p>
            </div>
            <h3 className="text-2xl font-medium my-2 tracking-wide text-indigo-dye pr-8">
              {title}
            </h3>
            <p className="pb-6 pr-4">
              <mark className="text-lg text-indigo-dye bg-champaign bg-opacity-90 tracking-wide">
                {excerpt}
              </mark>
            </p>
          </div>
        </div>

        <div className="flex pb-4 -mx-1 tracking-widest">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="mx-1 bg-tumbleweed rounded-sm text-rust font-medium px-1 pt-0.5"
            >
              #{tag}
            </p>
          ))}
        </div>
      </a>
    </Link>
  )
}
