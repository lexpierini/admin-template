import { ReactNode } from 'react'

import Content from './Content'
import Header from './Header'
import SideMenu from './SideMenu'

type LayoutProps = {
  title: string
  subtitle: string
  children?: ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <SideMenu />
      <div className="flex w-full flex-col bg-gray-300 p-7 dark:bg-gray-800">
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  )
}
