import React from "react";
import Modal from "react-modal";
import { ICard } from "../../data/card/ICard";
import { HistoryItem } from "./HistoryItem/HistoryItem";

interface IProps {
    isOpen: boolean;
    history: ICard[]
    onClose: () => void;
}

export const History = ({ isOpen, history, onClose }: IProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Nastavení"
        >
            <h2>Historie</h2>
            {history.map((card, idx) => (
                <HistoryItem card={card} number={idx + 1} key={idx} />
            ))}
            <div className="modal-close" onClick={onClose}><i className="fas fa-times"></i></div>
        </Modal>
    );
};
