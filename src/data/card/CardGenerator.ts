import { ISettings } from "../../ui/Settings/Settings";
import { IDataset } from "../dataset/IDataset";
import { getRandomInt } from "../random/random";
import { CardType } from "./CardType";
import { ICard } from "./ICard";

const capitalize = (s : string) => {
    if (s === "") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export const generateCard = (dataset: IDataset, settings: ISettings) : ICard => {
    const getQuestion = () => {
        return capitalize(dataset.questions[getRandomInt(0, dataset.questions.length - 1)])
    }
    const getBonus=  () => {
        return capitalize(dataset.bonuses[getRandomInt(0, dataset.bonuses.length - 1)])
    }
    const propability = Math.random()

    if (propability < 0.1){
        return {type: CardType.Bonus, text: getBonus()}
    }
    if (settings.allowMiniBonuses && propability < 0.3){
        return {type: CardType.Basic, text: getQuestion(), bonus: getBonus()}
    }
    return {type: CardType.Basic, text: getQuestion()}
}