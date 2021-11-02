import { FooterList } from './FooterList'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const explore = [
  {
    href: '#about',
    label: 'About'
  },
  {
    href: '#my-work',
    label: 'My work'
  },
  {
    href: '#blog',
    label: 'Blog'
  },
  {
    href: '#contact',
    label: 'Contact'
  }
]

const social = [
  {
    href: 'https://www.linkedin.com/in/wilsoncooked/',
    label: 'Linkedin',
    openInNewTab: true
  },
  {
    href: 'https://github.com/wilsoncooked',
    label: 'Github',
    openInNewTab: true
  },
  {
    href: 'https://twitter.com/wilsoncooked',
    label: 'Twitter',
    openInNewTab: true
  },
  {
    href: 'https://www.instagram.com/wilsoncooked/',
    label: 'Instagram',
    openInNewTab: true
  }
]

export function Footer() {
  const router = useRouter()

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window && window.scrollTo(0, 0)
    router.push('')
  }

  return (
    <div className="w-full grid grid-cols-2 px-16 py-24">
      <div>
        <button
          onClick={(e) => scrollToTop(e)}
          className="text-2xl text-rust font-serif font-extrabold  tracking-wider "
        >
          wilsoncooked
        </button>
      </div>
      <div>
        <div></div>
        <div className="flex w-full justify-between pr-16">
          <FooterList title="Explore" listItems={explore} />
          <FooterList title="Social" listItems={social} />
          <div>
            <button
              onClick={(e) => scrollToTop(e)}
              className="border border-rust rounded-full w-28 h-28 pt-1 flex items-center justify-center text-rust uppercase hover:text-champaign hover:bg-rust duration-150 hover:duration-150 tracking-widest"
            >
              To Top
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
