import { CardType } from "./CardType";

export interface ICardWithoutID {
    type: CardType
    header?: string,
    text: string,
    bonus?: string 
}
export interface ICard extends ICardWithoutID {
    id: number,
}