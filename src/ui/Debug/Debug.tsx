import React from "react"
import { ICard } from "../../data/card/ICard"
import { ISettings } from "../Settings/Settings"

interface IProps {
    card?: ICard,
    settings: ISettings,
}

export const Debug = ({card, settings} : IProps) => (
    <div>
        <ul>
            <li>Card: {card?.id}</li>
            <li>AllowRepetition: {settings.allowRepetition ? "TRUE": "FALSE"}</li>
        </ul>
    </div>
)