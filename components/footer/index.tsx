import { FooterLinks } from './FooterLinks'
import React from 'react'
import { useRouter } from 'next/router'
import { explore, social } from '../../content/navigation'

export function Footer() {
  const router = useRouter()

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window && window.scrollTo(0, 0)
    // router.push('/')
  }

  return (
    <footer className="w-full grid grid-cols-2 px-16 py-24">
      <div>
        <button
          onClick={(e) => scrollToTop(e)}
          className="text-2xl  font-serif font-extrabold  tracking-wider "
        >
          wilsoncooked
        </button>
      </div>
      <div>
        <div></div>
        <div className="flex w-full justify-between pr-16">
          <FooterLinks title="Explore" listItems={explore} />
          <FooterLinks title="Social" listItems={social} />
          <div>
            <button
              onClick={(e) => scrollToTop(e)}
              className="border rounded-full w-28 h-28 pt-1 flex items-center justify-center  uppercase hover:text-champaign hover:bg-black duration-150 hover:duration-150 tracking-widest"
            >
              To Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
