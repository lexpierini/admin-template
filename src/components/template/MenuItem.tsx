import Link from 'next/link'

type MenuItemProps = {
  url: string
  text: string
  icon: JSX.Element
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="hover:bg-gray-100">
      <Link href={props.url}>
        <div className="flex h-20 w-20 flex-col items-center justify-center">
          {props.icon}
          <span className="text-xs font-light text-gray-600">{props.text}</span>
        </div>
      </Link>
    </li>
  )
}
