import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Asterisk from '../assets/svgs/Asterisk'

export function Logo() {
  let degSize = 0.4
  const star = useRef(null)

  const getMouseDirection = (event: MouseEvent) => {
    star.current.style.transform = `rotate(${Math.floor(
      event.screenY * degSize
    )}deg)`
    return
  }

  useEffect(() => {
    if (window && star !== null) {
      window.addEventListener('mousemove', getMouseDirection)
    }
  }, [])

  return (
    <Link href="/">
      <a className="absolute top-8 left-12">
        <h2 className="text-5xl  font-serif font-bold flex">
          <span className="mt-1 mr-1">WC</span>
          <span ref={star} className="w-8 h-8 flex justify-center items-center">
            <Asterisk />
          </span>
          <span className="mt-1">d</span>
        </h2>
      </a>
    </Link>
  )
}
