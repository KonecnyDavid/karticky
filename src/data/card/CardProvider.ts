import { IDataset } from "../dataset/IDataset";
import { ICard } from "./ICard";

export interface ICardProvider {
    length: number,
    getCard: (id: number) => ICard,
    getAll: () => ICard[]
}

export const cardProvider = (dataset: IDataset) : ICardProvider=> {
    return {
        length: dataset.cards.length,
        getCard: (id: number) : ICard  => {
            return {...(dataset.cards[id]), id: id}
        },
        getAll: () => {
            return dataset.cards.map((card, id) => ({...card, id: id}))
        }
    }
}