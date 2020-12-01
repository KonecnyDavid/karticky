import { ISettings } from "../../ui/Settings/Settings";
import { IDataset } from "../dataset/IDataset";
import { getRandomInt } from "../random/random";
import { ICard } from "./ICard";

const capitalize = (s : string) => {
    if (s === "") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


export const generateCard = (dataset: IDataset, settings: ISettings) : ICard => {
    const id = getRandomInt(0, dataset.cards.length - 1);
    const card = dataset.cards[id]

    if (!settings.allowMiniBonuses)
        return {...card, text: capitalize(card.text), bonus: undefined, id: id};
    return {...card, text: capitalize(card.text), id: id};
}