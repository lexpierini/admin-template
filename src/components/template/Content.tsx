import { ReactNode } from 'react'

type ContentProps = {
  children?: ReactNode
}

export default function Content(props: ContentProps) {
  return <div className="mt-7 flex flex-col">{props.children}</div>
}
