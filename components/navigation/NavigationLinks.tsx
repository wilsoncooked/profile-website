import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { explore } from '../../content/navigation'

export default function NavigationLinks({
  setMenuOpen
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <ul className="text-center lg:text-left text-4xl lg:text-7xl text-champaign tracking-wider font-extralight uppercase lg:w-1/2">
      {explore.map((item, index) => (
        <li key={index} className="my-10">
          {item.openInNewTab ? (
            <a href={item.href} rel="noreferrer noopener" target="_blank">
              {item.label}
            </a>
          ) : (
            <Link href={item.href}>
              <a onClick={() => setMenuOpen(false)}>{item.label}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
