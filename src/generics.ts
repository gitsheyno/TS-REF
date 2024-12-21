const phones: {
  [k: string]: {
    customerId: string;
    areaCode: string;
    num: string;
  };
} = {};

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

interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

function listToDict<T>(
  list: T[],
  idGenerator: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};

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

interface Dict<T> {
  [k: string]: T;
}

function mapDict<T, S>(
  inputDict: Dict<T>,
  mapFunction: (original: T, key: string) => S
): Dict<S> {
  const outDict: Dict<S> = {};
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
const lemonName: string = fruitsWithKgMass.lemon.name;

//* Generic functions

const identity = <T>(arg: T): T => arg;

const result1 = identity<number>(42);

function filterDict<T>(
  inputDiict: Dict<T>,
  filterFunction: (value: T) => boolean
): Dict<T> {
  const outPutDict: Dict<T> = {};
  for (let key of Object.keys(inputDiict)) {
    const temp = inputDiict[key];

    if (filterFunction(temp)) {
      outPutDict[key] = temp;
    }
  }
  return outPutDict;
}

const redFruits = filterDict(fruits, (fruit) => fruit.color === "red");
