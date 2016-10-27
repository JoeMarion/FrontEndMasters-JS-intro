var animal = {};

animal.username = "Fox";
console.log(animal.username);

animal['tagline'] = "Howdy doody";
console.log(animal.tagline);

var noises = [];
animal['noises'] = noises;

console.log(animal);

for (key in animal) {
  if (key == "username") {
    console.log("Hi my name is " + animal[key]);
  } else if (key == "tagline") {
    console.log("I like to say " + animal[key]);
  }
}
