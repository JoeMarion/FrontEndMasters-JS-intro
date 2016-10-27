var animal = {};

animal.username = "Fox";
animal['tagline'] = "Howdy doody";

var noises = [];
animal['noises'] = noises;


var noiseArray = ["Rata tata tata"];

noiseArray.unshift("Wapapapapapapow!");
noiseArray.push("Ringdingdingdingdingding");

noiseArray[noiseArray.length] = "Ahee ahee a-hee";
animal.noises = noiseArray;
console.log(noiseArray);
console.log("The length is: " + noiseArray.length.toString());

console.log("The last index is " + (noiseArray.length - 1).toString());

var animals = [];

animals.push(animal);

var quackers = {
  username: "DaffyDuck",
  tagline: "Yippeee!",
  noises: ['quack', 'honk', 'sneeze', 'growl']
  }
animals.unshift(quackers);

console.log("**** List of animals ****");
console.log(animals);
