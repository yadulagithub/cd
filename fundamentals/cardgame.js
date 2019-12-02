const Deck = require("./deck");
const Card = require("./card");

const deck1 = new Deck();
deck1.shufflecards();

let playerHand1 = [];

playerHand1 = deck1.dealcards(5);
console.log(playerHand1);
playerHand1.length -= 2;
console.log(playerHand1);
playerHand1 = playerHand1.concat(deck1.dealcards(2));
console.log(playerHand1);