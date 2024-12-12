"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeGetUserInfo = void 0;
function printAmount(amt) {
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
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
const success = [
    "success",
    { name: "Mike North", email: "mike@example.com" },
];
const fail = ["error", new Error("Something went wrong!")];
function maybeGetUserInfo() {
    // implementation is the same in both examples
    if (flipCoin() === "heads") {
        return success;
    }
    else {
        return fail;
    }
}
exports.maybeGetUserInfo = maybeGetUserInfo;
const newYearEve = Object.assign(new Date(), {
    getDec: () => "Hello",
});
function printAmount2(amt) {
    console.log(amt.currency);
}
//* Inheritance in interfaces
//* Extends
function consumeFood(arg) { }
class AnimalThatEats {
    eat(food) {
        consumeFood(food);
    }
}
class Cat extends AnimalThatEats {
    name = "cat number 1";
    mewo() {
        console.log(`${this.name} does meow`);
    }
}
const cat = new Cat();
cat.eat("pasta");
cat.mewo();
const careForDog = (dog) => {
    dog.getTheAgeOfDog();
    dog.isAlive();
};
class DogClass {
    name;
    setName(name) {
        this.name = name;
    }
    eat(food) {
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
    health = 5;
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
        }
        else {
            return false;
        }
    }
}
class Dog2 extends LivingOrganism {
    eat(food) {
        console.log(`eats ${food} `);
    }
    bark() {
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
function feed2(animal) {
    if (animal.isAlive()) {
        animal.eat("pasta");
    }
}
const val = [3, 4, [5, 6, [7], 59], 221];
const val2 = 3;
console.log(typeof val2 !== "number");
