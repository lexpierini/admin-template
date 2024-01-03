import { ReactNode } from "react"
import SideMenu from "./SideMenu"
import Header from "./Header"
import Content from "./Content"

type LayoutProps = {
    title: string
    subtitle: string
    children?: ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <SideMenu />
            <Header title={props.title} subtitle={props.subtitle} />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}