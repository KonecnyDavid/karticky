const fs = require('fs');
const datasets = require("./datasets/datasets.json")

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

datasets.forEach((dataset) => {
    const { id, name, file } = dataset;
    const parsedDataset = {
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
                parsedDataset.bonuses.push(parsedLine[1])
            }
            parsedDataset.questions.push(parsedLine[0])
        });
    } catch (err) {
        console.error(err);
    }

    const cards = []

    // Generate questions
    let i = 0;
    while (dataset.questions > 0) {
        if (i >= parsedDataset.questions.length) i = 0;
        if (Math.random() < dataset.smallBonusChance)
            cards.push({ type: 0, text: parsedDataset.questions[i], bonus: parsedDataset.bonuses[getRandomInt(0, parsedDataset.bonuses.length)]})
        else
            cards.push({ type: 0, text: parsedDataset.questions[i] })
        i += 1;
        dataset.questions -= 1;
    }
    parsedDataset.questions = undefined;

    // Generate bonuses
    i = 0;
    while (dataset.bonuses > 0) {
        if (i >= parsedDataset.bonuses.length) i = 0;
        cards.push({ type: 1, text: parsedDataset.bonuses[i] })
        i += 1;
        dataset.bonuses -= 1;
    }
    parsedDataset.bonuses = undefined;
    parsedDataset.cards = cards;

    const data = JSON.stringify(parsedDataset)
    fs.writeFileSync(`./export/${id}.json`, data);
})