import { ISettings } from "../../ui/Settings/Settings";
import { getRandomInt } from "../random/random";
import { ICardProvider } from "./CardProvider";
import { ICard } from "./ICard";

const capitalize = (s : string) => {
    if (s === "") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


export const generateCard = (cardProvider: ICardProvider, settings: ISettings) : ICard => {
    const id = getRandomInt(0, cardProvider.length - 1);
    const card = cardProvider.getCard(id)

    if (!settings.allowMiniBonuses)
        return {...card, text: capitalize(card.text), bonus: undefined, id: id};
    return {...card, text: capitalize(card.text), id: id};
}