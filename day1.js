import { callAdventReadFiles as readFile } from "./fileProcessing.js";

async function getCalibrationSum () {
    const inputFile = await readFile('./inputs/day1.txt');

    const onlyNumStr = inputFile.map((str) => {
        return str.replace(/\D/g,'');
    });

    const onlyDoubleDigits = onlyNumStr.map((str) => {
        if (str.length === 1) {
            return str + str
        } else {
            const firstDigit = str[0];
            const lastDigit = str[str.length -1];
            return firstDigit + lastDigit
        }
    })

    const sumAll = onlyDoubleDigits.map((str) => parseInt(str))
    .reduce((accumulator, currentVal) => accumulator + currentVal)

    console.log(sumAll);
};

getCalibrationSum();
