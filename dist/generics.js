"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phones = {};
phones.home;
phones.work;
phones.fax;
phones.mobile;
const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
];
function listToDict(list, idGenerator) {
    const dict = {};
    list.forEach((element) => {
        const dictKey = idGenerator(element);
        dict[dictKey] = element;
    });
    return dict;
}
const result = listToDict(phoneList, (item) => item.customerId);
console.log(result);
const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
};
function mapDict(inputDict, mapFunction) {
    const outDict = {};
    for (let k of Object.keys(inputDict)) {
        const thisVal = inputDict[k];
        outDict[k] = mapFunction(thisVal, k);
    }
    return outDict;
}
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
    ...fruit,
    kg: 0.001 * fruit.mass,
    name,
}));
console.log("res", fruitsWithKgMass);
const lemonName = fruitsWithKgMass.lemon.name;
//* Generic functions
const identity = (arg) => arg;
const result1 = identity(42);
function filterDict(inputDiict, filterFunction) {
    const outPutDict = {};
    for (let key of Object.keys(inputDiict)) {
        const temp = inputDiict[key];
        console.log("temp", temp);
        if (filterFunction(temp)) {
            outPutDict[key] = temp;
        }
    }
    return outPutDict;
}
// function filterDict<T>(
//   inputDict: Dict<T>,
//   filterFunction: (value: T) => boolean
// ): Dict<T> {
//   const outDict: Dict<T> = {};
//   for (let k of Object.keys(inputDict)) {
//     const thisVal = inputDict[k];
//     if (filterFunction(thisVal)) {
//       outDict[k] = thisVal;
//     }
//   }
//   return outDict;
// }
const redFruits = filterDict(fruits, (fruit) => fruit.color === "red");
console.log("redFruits", redFruits);
