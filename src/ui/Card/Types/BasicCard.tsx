import { ICard } from "../../../data/card/ICard";
import { Card } from "../Card";
import React from "react";
import { Logo } from "../../Logo/Logo";
import "./BasicCard.css";

interface IProps {
    card: ICard;
    onClick?: () => void;
}

export const BasicCard = ({ card, onClick }: IProps) => {
    const { text, bonus } = card;

    return (
        <Card onClick={onClick}>
            <>
                <div>
                    <div className="card-header">
                        <Logo />
                    </div>
                    <div className="card-text">{text}</div>
                </div>
                {bonus && (
                    <div className="card-bonus">
                        <div className="card-bonus-text">
                            <i className="fas fa-beer"></i> {bonus}
                        </div>
                    </div>
                )}
            </>
        </Card>
    );
};
