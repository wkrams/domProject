import { CreateTarget, afficher } from "./tools.js";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const data = [2, 43, 87, 9, -19];

/*
for (let key in data) {
  console.log(`key: ${key}`);
}
*/

for (let value of data) {
  afficher(`value: ${value}`);
}

/* Iterate through the object
for (const key in population) {
  if (population.hasOwnProperty(key)) {
    console.log(`${key}: ${population[key]}`);
  }
}
*/
const obj = { name: "Joe", lastName: "Doe", age: 25 };
console.log(obj);

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}

/* let genders = Object.keys(population); */

const person = Object.keys(obj);
console.log(person);

person.forEach((elem) => console.log(obj[elem]));
for (let elem of person) {
  console.log(`${elem}: ${obj[elem]}`);
}
