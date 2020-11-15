import React, { useEffect, useState } from "react";
import { createCardGenerator } from "../../data/card/CardGeneratorFactory";
import { CardType } from "../../data/card/CardType";
import { BasicCard } from "../Card/Types/BasicCard";
import { BonusCard } from "../Card/Types/BonusCard";
import "./CardLibrary.css"

interface Props {
    datasetName?: string
}

const generateCard = createCardGenerator("karticky");

export const CardLibrary = ({datasetName} : Props) => {
    const [card, setCard] : any = useState(null)

    useEffect(() => {
        setCard(generateCard())
    }, [])

    const onClick = () => {
        setCard(generateCard())
    }

    const cardElem = card && card.type === CardType.Basic ? <BasicCard onClick={onClick} card={card} /> : <BonusCard onClick={onClick} card={card} />

    return (
        <div className="card-library">
            {card && cardElem}
            <div className="card-libray-help bounce-7">Klikni na kartu👆</div>
        </div>
    )
}