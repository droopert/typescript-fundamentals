/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
let shuffleArray: (a: any[]) => void
shuffleArray = function(a) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

export enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}

type Card = [Suit, CardNumber]

type Deck = Card[]

export class Dealer {
  constructor() {
    const deck: Deck = []
    
    for (const suit in Suit) {
      const suitIndex = Number(suit)
      if (!isNaN(suitIndex)) {
        for (const cardNumber in CardNumber) {
          const cardNumberIndex = Number(cardNumber)
          if (!isNaN(cardNumberIndex)) {
            deck.push([suitIndex, cardNumberIndex])
          }
        }
      }
    }
    
    this.deck = deck 
    this.shuffle()
  }

  deck: Deck

  addCard(card: Card): Deck {
    this.deck.push(card)
    return this.deck
  }

  shuffle() {
    shuffleArray(this.deck)
  }

  dealHand(n: number): Deck {
    if (n < 0) throw Error('Can\'t deal negative number of cards')
    if (n > this.deck.length) throw Error(`Sorry, there are only ${this.deck.length} cards in the deck, and you asked for ${n}.`) 

    return this.deck.splice(this.getLength() - n, n)
  }

  getLength() {
    return this.deck.length
  }

  readCard(card: Card): string {
    const [suit, cardNumber] = card
    return `${CardNumber[cardNumber]} of ${Suit[suit]}`
  }
}
