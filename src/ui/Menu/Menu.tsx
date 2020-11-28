import React from "react";
import { Logo } from "../Logo/Logo";
import "./Menu.css"
import {
    Link
  } from "react-router-dom";

interface Props {
    children: any
}

export const Menu = ({children} : Props) => {
    return (
        <nav className="menu">
            <Link to="/karticky/"><Logo /></Link>
            {children}
        </nav>
    )
}