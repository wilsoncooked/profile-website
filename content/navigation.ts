type MenuLink = {
  href: string
  label: string
  openInNewTab?: boolean
}

export const explore: MenuLink[] = [
  {
    href: '/# ',
    label: 'Home'
  },
  {
    href: '/#about',
    label: 'About'
  },
  {
    href: '/#my-work',
    label: 'My work'
  },
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/#contact',
    label: 'Contact'
  }
]

export const social: MenuLink[] = [
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
