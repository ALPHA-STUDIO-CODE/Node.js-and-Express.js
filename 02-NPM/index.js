import generateName from "sillyName";
import { randomSuperhero } from "superheroes";

// To generate a Silly Name
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// To generate a Super Hero Name
const name = randomSuperhero();
console.log(`I am ${name}!`);
