
    const suits = ['Hearts', 'Clubs', 'Dimonds', 'Spades'];
    const values = ['Ace', '2','3','4','5','6','7','8','9','Jack', 'Queen', 'King'];
    
    
    class Card {

        constructor(suit, value) {
            this.suit = suit;
            this.value = value;
        }
        show() {
            console.log(`The card is ${this.value} of ${this.suit}`);
        }
    
    }

    module.exports = Card;