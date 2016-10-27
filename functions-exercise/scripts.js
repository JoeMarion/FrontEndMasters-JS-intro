var AnimalTestUser = function (username) {
  var remainingArgs = [];
  for (var i = 0; i < arguments.length; i++) {
    if (i !== 0) { remainingArgs.push(arguments[i]); };
  };

  return { 
    username: username,
    otherArgs: remainingArgs
    }
};

var testSheep = AnimalTestUser('CottonBall', 'Bleep', 'Bloop');
console.log(testSheep);

var AnimalCreator = function (username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
};

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var cow = AnimalCreator('Moo', 'cow', 'Bark at the Mooooon', ['Mooo', 'Huff', 'MooOOOo']);

var chicken = AnimalCreator('McChick', 'chicken', 'Did I just cross the road?', ['Bock bock', 'chirp', 'Cackadoodledoo']);

var addFriend = function (animal, new_friend) {
  animal.friends.push(new_friend.username);
};

addFriend(sheep, cow);
addFriend(chicken, sheep);

var myFarm = {
  sheep: sheep,
  cow: cow,
  chicken: chicken
};

var addMatchesArray = function (farm) {
  for (key in farm) {
    farm[key]['matches'] = [];
  };
}

var giveMatches = function (farm) {
  for (key in farm) {
    farm[key].matches.push(farm[key].friends[0]);
  }
};
