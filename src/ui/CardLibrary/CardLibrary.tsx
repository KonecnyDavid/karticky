import React, { useEffect, useState } from "react";
import { createCardGenerator } from "../../data/card/CardGeneratorFactory";
import { CardType } from "../../data/card/CardType";
import { ICard } from "../../data/card/ICard";
import { BasicCard } from "../Card/Types/BasicCard";
import { BonusCard } from "../Card/Types/BonusCard";
import { Debug } from "../Debug/Debug";
import { ISettings } from "../Settings/Settings";
import "./CardLibrary.css";

interface Props {
    datasetName?: string;
    settings: ISettings;
    history: ICard[];
    onCardAdded: (card: ICard) => void;
}

export const cardResolver = (card: ICard, onClick: () => void) => (
    <>
    {card && card.type === CardType.Basic ? (
        <BasicCard onClick={onClick} card={card} />
    ) : (
        <BonusCard onClick={onClick} card={card} />
    )}
    </>
)

const generateCard = createCardGenerator("karticky");

export const CardLibrary = ({
    datasetName,
    settings,
    history,
    onCardAdded,
}: Props) => {
    const [card, setCard] = useState<ICard>();

    const generateCardWrapper = () => {
        let card = generateCard(settings);

        // Exclude already displayed card if setting
        while (!settings.allowRepetition && history.includes(card)) {
            card = generateCard(settings);
        }

        onCardAdded(card);
        setCard(card);
    };

    useEffect(() => {
        generateCardWrapper();
    }, []);

    const onClick = () => {
        generateCardWrapper();
    }

    return (
        <div className="card-library">
            {card && cardResolver(card, onClick)}
            <div className="card-library-help bounce-7">Klikni na kartu👆</div>
            {settings.debug &&
                <Debug settings={settings} card={card}/>
            }
        </div>
    );
};
