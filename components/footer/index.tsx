import { FooterList } from './FooterList'

const siteLinks = [
  {
    href: '',
    label: 'Top'
  },
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

export function Footer() {
  return (
    <div className="w-full grid grid-cols-3">
      <div>wilsoncooked</div>
      <div></div>
      <div>
        <div></div>
        <div>
          <FooterList title="Site Links" listItems={siteLinks} />
        </div>
      </div>
    </div>
  )
}
