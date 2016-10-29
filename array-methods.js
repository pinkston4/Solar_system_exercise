var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planetList = '';
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(item) {
	planetList = planetList + item +" ";;
	document.getElementById("planets").innerHTML = planetList;
});




// var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized
 var cap = planets.map( function(planets) { 
	return planets.charAt(0).toUpperCase() + planets.slice(1);
});
console.log(cap);

// Use the filter method to create a new array that contains planets with the letter 'e'

var letterE = planets.filter( function(planets) {
	return planets.includes("e");
});
console.log(letterE);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese."];

var newSentence = words.reduce( function(prev, cur) {
	return prev + " " + cur;
});
console.log(newSentence);
