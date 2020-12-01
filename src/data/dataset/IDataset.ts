import { ICardWithoutID } from "../card/ICard";

export interface IDataset {
    name: string
    id: string,
    cards: ICardWithoutID[]
}