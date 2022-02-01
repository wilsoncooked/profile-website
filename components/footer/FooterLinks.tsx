import Link from 'next/link'

type ListItem = {
  href: string
  label: string
  openInNewTab?: boolean
}

type Props = {
  title: string
  listItems: ListItem[]
}

export function FooterLinks({ title, listItems }: Props) {
  return (
    <ul className="text-xl  tracking-wider">
      <li className="font-serif font-extrabold my-2">{title}</li>
      {listItems.map((item, index) => (
        <li key={index} className="my-1.5">
          {item.openInNewTab ? (
            <a href={item.href} rel="noreferrer noopener" target="_blank">
              {item.label}
            </a>
          ) : (
            <Link href={item.href}>
              <a>{item.label}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
