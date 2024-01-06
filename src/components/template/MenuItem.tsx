import Link from 'next/link'
import { MouseEvent } from 'react'

type MenuItemProps = {
  url?: string
  text: string
  icon: JSX.Element
  onClick?: (event: MouseEvent<HTMLElement>) => void
  className?: string
}

export default function MenuItem(props: MenuItemProps) {
  const linkContentRender = () => (
    <div
      className={`flex h-20 w-20 flex-col items-center justify-center  text-gray-600 ${props.className}`}
    >
      {props.icon}
      <span className="text-xs font-light">{props.text}</span>
    </div>
  )

  return (
    <li onClick={props.onClick} className="hover:bg-gray-100 cursor-pointer">
      {props.url ? <Link href={props.url}>{linkContentRender()}</Link> : linkContentRender()}
    </li>
  )
}
