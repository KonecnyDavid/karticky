import React from "react";
import { CardType } from "../../data/card/CardType";
import { ICard } from "../../data/card/ICard";

interface IProps {
    card: ICard;
    number?: number;
}

export const CardCompact = ({ card, number }: IProps) => {
    return (
        <div>
            <div>
                <span
                    style={{
                        width: "1rem",
                        float: "left",
                        textAlign: "right",
                        marginRight: "1rem",
                    }}
                >
                    {number ? number : card.id}.
                </span>
                <strong>
                    {card.type === CardType.Bonus && (
                        <i className="far fa-star"></i>
                    )}
                    {card.text}
                </strong>
            </div>
            {card.bonus && <div style={{marginLeft: "2rem"}}>
            <small>{card.bonus}</small>
            </div>}
        </div>
    );
};
