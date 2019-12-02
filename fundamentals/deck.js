const Card = require("./card");

const suits = ["Spades", "Diamonds", "Hearts", "Clubs"];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

class Deck extends Card {
     constructor() {
         super() ;
         this.cards = [];
         this.resetcards();
     }

     
    resetcards() {
        
        for(let suit of suits) {
            for(let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    // randomly get two cards and switch 
    shufflecards() {
        for(let i=0; i< 100; i++) {

            let location1 = Math.floor((Math.random() * this.cards.length));
		    let location2 = Math.floor((Math.random() * this.cards.length));
		    let tmp = this.cards[location1];

		    this.cards[location1] = this.cards[location2];
		    this.cards[location2] = tmp;
            }
    }
    
    dealcards(n=1) {
        let cards = [];
        for(let i=0; i<n; i++) {
            cards.push(this.cards.pop());
        }
        return cards;
    }
}

module.exports = Deck;
