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
      className={`flex h-20 w-20 flex-col items-center justify-center dark:text-gray-200 ${props.className} `}
    >
      {props.icon}
      <span className="text-xs font-light">{props.text}</span>
    </div>
  )

  return (
    <li onClick={props.onClick} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
      {props.url ? <Link href={props.url}>{linkContentRender()}</Link> : linkContentRender()}
    </li>
  )
}
