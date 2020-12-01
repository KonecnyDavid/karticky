import React from "react";
import { Link } from "react-router-dom";
import "./Rules.css"

export const Rules = () => {
    return (
        <div className="rules">
            <h2>Pravidla hry</h2>
            <p>
                Hra je pro dva a více hráčů a princip hry je jednoduchý -
                zkrátka klepnete na kartu a nahlas přečtete otázku nebo úkol na
                kartě a buďto splníte nebo odpovíte na to, co je na ní, nebo
                pijete panáka a jede další hráč.
            </p>
            <p>
                Během hraní hry narazíte na dva typy karet, klasické bílé s
                otázkou nebo černé bonusové.
            </p>
            <p>
                Také je možné v nastavení zapnout generování minibonusů přímo na
                karty s otázkou nebo povolit opakování karet.
            </p>

            <Link to="/"><strong>🍻 Zpět do hry</strong></Link>
        </div>
    );
};
