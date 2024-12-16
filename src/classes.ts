//* Classes

class Car {
  //? Statit fields
  static nextSerialNumber: number;
  static generateserialNumber() {
    return this.nextSerialNumber++;
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

  serialNumber = Car.generateserialNumber();

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

Car.generateserialNumber();
