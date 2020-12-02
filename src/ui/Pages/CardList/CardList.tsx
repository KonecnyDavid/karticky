import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ICardProvider } from "../../../data/card/CardProvider"
import { createCardProvider } from "../../../data/card/CardProviderFactory"
import { CardCompact } from "../../CardCompact/CardCompact"

export const CardList = () => {
    const [cardProvider, setCardProvider] = useState<ICardProvider>()
    
    useEffect(() => {
        setCardProvider(createCardProvider("karticky"))
    }, [])

    return (
        <div>
            {cardProvider?.getAll().map(card => (<Link to={`/karta/${card.id}`}><CardCompact card={card}/></Link>))}
        </div>
    )
}