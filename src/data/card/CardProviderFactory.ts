import { IDataset } from "../dataset/IDataset";
import { cardProvider } from "./CardProvider";

export const createCardProvider = (datasetName: string) => {
    const dataset : IDataset = require(`./../datasets/${datasetName}.json`)
    return cardProvider(dataset);
}