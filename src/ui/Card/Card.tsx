import React from "react";
import { Logo } from "../Logo/Logo";
import "./Card.css";

interface Props {
    text: string;
    bonus?: string;
    onClick: any
}

export const Card = ({ text, bonus, onClick}: Props) => {
    return (
        <div className="card" onClick={onClick}>
            <div>
                <div className="card-header">
                    <Logo />
                </div>
                <div className="card-text">{text}</div>
            </div>
            {bonus && (
                <div className="card-bonus">
                    <div className="card-bonus-text">
                        Příštího panáka nelze zapít
                    </div>
                </div>
            )}
        </div>
    );
};
