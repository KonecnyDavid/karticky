import React, { useState } from "react";
import "./Card.css";

interface IProps {
    onClick: any;
    children: JSX.Element;
    className?: string
}

export const Card = ({ onClick, children, className }: IProps) => {
    const [wobble, setWobble] = useState(0);

    const onClickHandler = (e: any) => {
        onClick(e);
        setWobble(1)
    };

    return (
        <div
            className={"card " + className}
            onClick={onClickHandler}
            onAnimationEnd={() => setWobble(0)}
            data-wobble={wobble}
            id="card"
        >
            {children}
        </div>
    );
};
