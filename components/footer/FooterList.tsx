import Link from 'next/link'

type ListItem = {
  href: string
  label: string
}

type Props = {
  title: string
  listItems: ListItem[]
}

export function FooterList({ title, listItems }: Props) {
  return (
    <ul>
      <li>{title}</li>
      {listItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
