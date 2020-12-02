import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Settings.css"

export interface ISettings {
    allowRepetition: boolean;
    allowMiniBonuses: boolean
}

interface IProps {
    isOpen: boolean;
    onSave: (settings : ISettings) => void;
    onClose: () => void;
}

export const defaultSettings : ISettings = {
    allowRepetition: true,
    allowMiniBonuses: true,
};

export const Settings = ({ isOpen, onSave, onClose }: IProps) => {
    const [settings, setSettings] = useState(defaultSettings);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "checkbox") {
            setSettings({
                ...settings,
                [e.target.name]: e.target.checked
            })
        }
    };

    useEffect(() => {
        onSave(settings)
    }, [settings, onSave]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Nastavení"
        >
            <h2>Nastavení</h2>
            <div>
            <h5 className="settings-subtitle">Povolit opakování karet</h5>
            <input
                type="checkbox"
                name="allowRepetition"
                onChange={handleChange}
                checked={settings.allowRepetition}
            />
            </div>
            <div>
            <h5 className="settings-subtitle">Povolit minibonusy</h5>
            <input
                type="checkbox"
                name="allowMiniBonuses"
                onChange={handleChange}
                checked={settings.allowMiniBonuses}
            />

            <Link to="/vsechny_karty">Zobrazit celou sadu karet</Link>

            </div>

            <div className="modal-close" onClick={onClose}><i className="fas fa-times"></i></div>
        </Modal>
    );
};
