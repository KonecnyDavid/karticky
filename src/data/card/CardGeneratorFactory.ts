import { IDataset } from "../dataset/IDataset";
import { generateCard } from "./CardGenerator";

export const createCardGenerator = (datasetName: string) => {
    const dataset : IDataset = require(`./../datasets/${datasetName}.json`)

    return () => generateCard(dataset);
}