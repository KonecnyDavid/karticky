import React from "react";
import { useParams } from "react-router-dom";
import { createCardProvider } from "../../../data/card/CardProviderFactory";
import { cardResolver } from "../../CardLibrary/CardLibrary";

interface IParams {
    id: string;
}

export const CardDetail = () => {
    const params = useParams<IParams>();
    const id = parseInt(params.id);
    const cardProvider = createCardProvider("karticky");

    if (id >= cardProvider.length) {
        return (
            <div>
                <strong style={{ color: "#ee3333" }}>
                    Karta s tímto ID neexistuje!
                </strong>
            </div>
        );
    }
    const card = cardProvider.getCard(id);
    const cardElement = cardResolver(card, () => {});
    return (
        <div>
            <h2>
                ID Karty: <strong>{id}</strong>
            </h2>
            {cardElement}
        </div>
    );
};
