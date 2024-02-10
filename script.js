//complete this code
// Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat subclass
class Cat extends Animal {
    purr() {
        console.log('purr');
    }
}

// Dog subclass
class Dog extends Animal {
    bark() {
        console.log('woof');
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
