import { ICard } from "../../../data/card/ICard";
import { Card } from "../Card";
import React from "react";
import { Logo } from "../../Logo/Logo";
import "./BonusCard.css"

interface IProps {
    card: ICard;
    onClick: () => void;
}

export const BonusCard = ({ card, onClick} : IProps) => {
    const { text } = card;

    return (
        <Card onClick={onClick} className="card-dark">
            <>
                <div>
                    <div className="card-header">
                        <Logo />
                    </div>
                    <div className="card-star">
                        <i className="far fa-star"></i>
                    </div>
                    <div className="card-text">{text}</div>
                </div>
            </>
        </Card>
    );
}