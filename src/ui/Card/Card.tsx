import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import "./Card.css";

interface Props {
    text: string;
    bonus?: string;
    onClick: any;
}

export const Card = ({ text, bonus, onClick }: Props) => {
    const [wobble, setWobble] = useState(0);

    const onClickHandler = (e: any) => {
        onClick(e);
        setWobble(1)
    };

    return (
        <div
            className="card"
            onClick={onClickHandler}
            onAnimationEnd={() => setWobble(0)}
            data-wobble={wobble}
        >
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
        </div>
    );
};
