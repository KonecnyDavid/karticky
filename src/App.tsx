import React, { useState } from "react";
import "./App.css";
import { CardLibrary } from "./ui/CardLibrary/CardLibrary";
import { defaultSettings, Settings } from "./ui/Settings/Settings";
import { Menu } from "./ui/Menu/Menu";
import { History } from "./ui/History/History";
import { ICard } from "./data/card/ICard";

function App() {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [settings, setSettings] = useState(defaultSettings);
    const [history, setHistory] = useState<ICard[]>([]);

    const addToHistory = (card: ICard) => {
        setHistory([...history, card]);
    };

    return (
        <div className="app" id="app">
            <Menu>
                <div>
                    <span
                        onClick={() => setIsHistoryOpen(true)}
                        className="menu-item cursor-pointer"
                    >
                        <i className="fas fa-history"></i> Historie
                    </span>
                    <span
                        onClick={() => setIsSettingsOpen(true)}
                        className="menu-item cursor-pointer"
                    >
                        <i className="fas fa-cog"></i> Nastavení
                    </span>
                </div>
            </Menu>
            <div className="card-container">
                <CardLibrary
                    settings={settings}
                    onCardAdded={addToHistory}
                    history={history}
                />
            </div>
            <Settings
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                onSave={(data) => setSettings(data)}
            />
            <History
                isOpen={isHistoryOpen}
                onClose={() => setIsHistoryOpen(false)}
                history={history}
            />
        </div>
    );
}

export default App;
