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
        bonus: Math.random() > 0.8 ? dataset.getQuestion() : null
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

    return (
        <div>
            <Card {...card} onClick={onClick}/>
        </div>
    )
}