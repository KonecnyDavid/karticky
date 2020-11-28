import { ISettings } from "../../ui/Settings/Settings";
import { IDataset } from "../dataset/IDataset";
import { generateCard } from "./CardGenerator";

export const createCardGenerator = (datasetName: string) => {
    const dataset : IDataset = require(`./../datasets/${datasetName}.json`)

    return (settings : ISettings) => generateCard(dataset, settings);
}