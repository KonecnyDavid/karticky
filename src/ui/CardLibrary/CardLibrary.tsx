import React, { useEffect, useState } from "react";
import { loadDataset } from "../../data/loadDataset";
import { Card } from "../Card/Card";
import "./CardLibrary.css"

interface Props {
    datasetName?: string
}

const dataset = loadDataset();

const createCard = () => {
    return {
        text: dataset.getQuestion(),
        bonus: Math.random() > 0.2 ? dataset.getBonus() : null
    }
}

export const CardLibrary = ({datasetName} : Props) => {
    const [card, setCard] : any = useState()

    useEffect(() => {
        setCard(createCard())
    }, [])

    const onClick = () => {
        setCard(createCard())
    }

    console.log(card)

    return (
        <div className="card-library">
            <Card {...card} onClick={onClick}/>
            <div className="card-libray-help bounce-7">Klikni na kartu👆</div>
        </div>
    )
}