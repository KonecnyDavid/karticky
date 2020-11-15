import { CardType } from "./CardType";

export interface ICard {
    type: CardType
    header?: string,
    text: string,
    bonus?: string
}