//* Classes

class Car {
  //? Statit fields
  //   static nextSerialNumber: number;
  //   static generateserialNumber() {
  //     return this.nextSerialNumber++;
  //   }

  //* access modifier on static members
  private static nextSerialNumber: number;
  private static generateSerialNumber() {
    return this.nextSerialNumber;
  }

  //? Statiuc block

  static {
    fetch("https://api.example.com")
      .then((response) => response.json())
      .then((data) => {
        this.nextSerialNumber = data.mostRecentINvoicedId + 1;
      });
  }

  //? Fields,
  make: string;
  model: string;
  year: number;

  //! not protected
  //   serialNumber = Car.generateserialNumber();

  //* Protected by access modifier
  private _serialNumber = Car.generateSerialNumber();
  protected get serialNumber(): number {
    return this._serialNumber;
  }

  //* JS privuate fields => #
  #serialNumber = Car.generateSerialNumber();
  protected get privateSerialNumber(): number {
    return this.#serialNumber;
  }
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //? Methods
  honk(duration: number): string {
    return `h${"o".repeat(duration)}nk`;
  }

  getLabel() {
    return `${this.make} ${this.model} ${this.year} - #${Car.nextSerialNumber}`;
  }
}

let sedan = new Car("Honda", "Accord", 2017);
sedan.honk(5);

// Car.generateserialNumber();

class Truck extends Car {
  override honk(duration: number): string {
    return `h${"o".repeat(duration)}nk`;
  }
}

//* Type Gaurds

interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: any;

// the guard
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    typeof valueToTest["make"] === "string" &&
    "model" in valueToTest &&
    typeof valueToTest["model"] === "string" &&
    "year" in valueToTest &&
    typeof valueToTest["year"] === "number"
  );
}

// using the guard
if (isCarLike(maybeCar)) {
  let maybeCar: CarLike;
}

interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar2: any;

// the guard
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}

// using the guard

assertsIsCarLike(maybeCar2);
maybeCar2;
