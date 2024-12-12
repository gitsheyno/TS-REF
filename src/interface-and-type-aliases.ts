//* Type Aliases
type Amount = {
  currency: string;
  value: number;
};

function printAmount(amt: Amount) {
  console.log(amt);

  const { currency, value } = amt;
  console.log(`${currency} ${value}`);
}

const donation = {
  currency: "USD",
  value: 30.0,
  description: "Donation to food bank",
};

printAmount(donation);

function flipCoin() {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}
const success = [
  "success",
  { name: "Mike North", email: "mike@example.com" },
] as const;
const fail = ["error", new Error("Something went wrong!")] as const;

export function maybeGetUserInfo(): UserInfoOutcome {
  // implementation is the same in both examples
  if (flipCoin() === "heads") {
    return success;
  } else {
    return fail;
  }
}

type UserInfoOutcomeError = readonly ["error", Error];
type UserInfoOutcomeSuccess = readonly [
  "success",
  { readonly name: string; readonly email: string }
];
type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

//* Inheritance in type aliases

type SpecialDate = Date & { getDescription(): string };
type NewFunct = {
  getDec(): string;
};
type NewSpecialDate = Date & NewFunct;

const newYearEve: NewSpecialDate = Object.assign(new Date(), {
  getDec: () => "Hello",
});

//* Interfaces

interface Amount2 {
  currency: string;
  value: number;
}

function printAmount2(amt: Amount2) {
  console.log(amt.currency);
}

//* Inheritance in interfaces
//* Extends

function consumeFood(arg: string) {}

class AnimalThatEats {
  eat(food: string) {
    consumeFood(food);
  }
}

class Cat extends AnimalThatEats {
  private name = "cat number 1";
  mewo() {
    console.log(`${this.name} does meow`);
  }
}

const cat = new Cat();

cat.eat("pasta");
cat.mewo();

interface Animal {
  name: string;
  isAlive(): {};
}

interface Dog extends Animal {
  getTheAgeOfDog(): string;
}

const careForDog = (dog: Dog) => {
  dog.getTheAgeOfDog();
  dog.isAlive();
};

//* Implement

interface AnimalLike {
  eat(food: string): void;
}

class DogClass implements AnimalLike {
  private name: string;
  setName(name: string) {
    this.name = name;
  }
  eat(food: string) {
    return `${this.name} eats ${food}`;
  }
  bark() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new DogClass();
myDog.setName("salar");
console.log(myDog.eat("pizza"));
myDog.bark();

class LivingOrganism {
  private health: number = 5;

  getHealth() {
    return this.health;
  }
  damage() {
    this.health--;
  }
  hill() {
    this.health += 0.5;
  }
  isAlive() {
    if (this.health) {
      return true;
    } else {
      return false;
    }
  }
}

interface IAnimalLike {
  eat(food: string): void;
}

interface ICanBArk {
  bark(): string;
}

class Dog2 extends LivingOrganism implements IAnimalLike, ICanBArk {
  eat(food: string): void {
    console.log(`eats ${food} `);
  }
  bark(): string {
    return "barkkkk";
  }
}

//* Open Interfaces

// function feed(animal: AnimalLike) {
//   if (animal.isAlive()) {
//     animal.eat("pasta");
//   }
// }

// interface AnimalLike {
//   isAlive(): boolean;
// }

function feed2(animal: AnimalLikeHelper) {
  if (animal.isAlive()) {
    animal.eat("pasta");
  }
}
interface AnimalLikeHelper extends AnimalLike {
  isAlive(): boolean;
}

//* global interface redeclaration
declare global {
  interface Window {
    myName: string;
  }
}
// console.log(window.myName);

//* Recursive types

type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];
const val2: NestedNumbers = 3;

console.log(typeof val2 !== "number");
