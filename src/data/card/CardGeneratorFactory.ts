import { ISettings } from "../../ui/Settings/Settings";
import { generateCard } from "./CardGenerator";
import { createCardProvider } from "./CardProviderFactory";
import { ICard } from "./ICard";

export type CardGenerator = (settings : ISettings) => ICard;

export const createCardGenerator = (datasetName: string) : CardGenerator => {
    const cardProvider = createCardProvider(datasetName)
    return (settings : ISettings) => generateCard(cardProvider, settings);
}