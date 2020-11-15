import React, { useState } from "react";
import "./Card.css";

interface Props {
    onClick: any;
    children: JSX.Element
}

export const Card = ({ onClick, children }: Props) => {
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
            {children}
        </div>
    );
};
