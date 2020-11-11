import React from "react";
import { Logo } from "../Logo/Logo";
import "./Menu.css"

interface Props {
    children: any
}

export const Menu = ({children} : Props) => {
    return (
        <nav className="menu">
            <Logo />
            {children}
        </nav>
    )
}