import React, { useState } from "react";
import "./Game.css";
import { CardLibrary } from "./ui/CardLibrary/CardLibrary";
import { defaultSettings, Settings } from "./ui/Settings/Settings";
import { Menu } from "./ui/Menu/Menu";
import { History } from "./ui/History/History";
import { ICard } from "./data/card/ICard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Rules } from "./ui/Pages/Rules/Rules";
import { CardDetail } from "./ui/Pages/CardDetail/CardDetail";
import { CardList } from "./ui/Pages/CardList/CardList";
import Modal from "react-modal"

Modal.setAppElement("#root")

export const Game = () => {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [settings, setSettings] = useState(defaultSettings);
    const [history, setHistory] = useState<ICard[]>([]);

    const addToHistory = (card: ICard) => {
        setHistory([...history, card]);
    };

    return (
        <div className="app" id="app">
            <Router basename="/karticky">
            <Menu>
                <div>
                    <Link to="/pravidla" className="menu-item"><i className="fas fa-info"></i> Pravidla</Link>
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
            <Switch>
          <Route path="/pravidla">
            <Rules />
          </Route>
          <Route path="/vsechny_karty">
            <CardList />
          </Route>
          <Route path="/karta/:id">
            <CardDetail />
          </Route>
          <Route exact path="/">
          <CardLibrary
                    settings={settings}
                    onCardAdded={addToHistory}
                    history={history}
                />
          </Route>
        </Switch>
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
            </Router>
        </div>
    );
}
