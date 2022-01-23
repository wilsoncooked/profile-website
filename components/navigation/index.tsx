import { useEffect, useRef, useState } from 'react'
import Menu from '../../assets/icons/Menu'
import NavigationLinks from './NavigationLinks'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuOverlay = useRef(null)

  useEffect(() => {
    if (menuOpen) {
      menuOverlay.current.focus()
      document && document.body.classList.add('overflow-hidden')
    } else {
      document && document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed right-12 top-6 z-50"
      >
        <Menu menuOpen={menuOpen} />
      </button>
      <div
        ref={menuOverlay}
        className={`${
          menuOpen ? 'block' : 'hidden'
        } h-screen w-screen fixed inset-0 z-30 bg-indigo-dye flex justify-center items-center text-champaign`}
      >
        <NavigationLinks setMenuOpen={setMenuOpen} />
      </div>
    </>
  )
}
