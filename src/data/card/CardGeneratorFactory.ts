import { ISettings } from "../../ui/Settings/Settings";
import { generateCard } from "./CardGenerator";
import { createCardProvider } from "./CardProviderFactory";

export const createCardGenerator = (datasetName: string) => {
    const cardProvider = createCardProvider(datasetName)
    return (settings : ISettings) => generateCard(cardProvider, settings);
}