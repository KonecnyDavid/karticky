import { IDataset } from "../dataset/IDataset";
import { getRandomInt } from "../random/random";
import { CardType } from "./CardType";
import { ICard } from "./ICard";

export const generateCard = (dataset: IDataset) : ICard => {
    const getQuestion = () => {
        return dataset.questions[getRandomInt(0, dataset.questions.length)]
    }
    const getBonus=  () => {
        return dataset.bonuses[getRandomInt(0, dataset.bonuses.length)]
    }
    const propability = Math.random()

    if (propability < 0.1){
        return {type: CardType.Bonus, text: getBonus()}
    }
    if (propability < 0.3){
        return {type: CardType.Basic, text: getQuestion(), bonus: getBonus()}
    }
    return {type: CardType.Basic, text: getQuestion()}
}