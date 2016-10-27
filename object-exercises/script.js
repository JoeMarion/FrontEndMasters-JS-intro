var animal = {};

animal.username = "Fox";
animal['tagline'] = "Howdy doody";

var noises = [];
animal['noises'] = noises;

console.log(animal);

var count = 0
for (key in animal) {
  count++;
  if (key === "username") {
    console.log("Hi my name is " + animal[key]);
  } else if (key === "tagline") {
    console.log("I like to say " + animal[key]);
  }
}
