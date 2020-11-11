function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const loadDataset = () => {
    const karticky = require("./dataset/karticky.json")

    return {
        getQuestion: () => {
            return karticky.questions[getRandomInt(0, karticky.questions.length)]
        },
        getBonus: () => {
            return karticky.bonuses[getRandomInt(0, karticky.bonuses.length)]
        }
    }
}