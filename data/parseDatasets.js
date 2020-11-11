const fs = require('fs');
const datasets = require("./datasets/datasets.json")

datasets.forEach((dataset) => {
    const { id, name, file } = dataset;
    const finalDataset = {
        name: name,
        id: id,
        questions: [],
        bonuses: [],
    }

    try {
        // read contents of the file
        const data = fs.readFileSync(`./datasets/${file}`, 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);

        // print all lines
        lines.forEach((line) => {
            const parsedLine = line.split("\t")
            if (parsedLine.length > 1 && parsedLine[1] !== "") {
                finalDataset.bonuses.push(parsedLine[1])
            }
            finalDataset.questions.push(parsedLine[0])
        });
    } catch (err) {
        console.error(err);
    }

    const data = JSON.stringify(finalDataset)
    fs.writeFileSync(`./export/${id}.json`, data);
})