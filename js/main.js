var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[1];
cards.push('cardOne');
console.log("User flipped queen");
var cardTwo = cards[3];
cardsInPlay.push('cardTwo');
console.log("User flipped king");
if (cardsInPlay.length === 2) {
	console.log("you have selected two cards");
}
if (cardsInPlay[0] === cards.length[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again");
}