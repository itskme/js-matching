// Get the HTML elements
const cards = document.querySelectorAll('.card');
const scoreDisplay = document.querySelector('.score');
const messageDisplay = document.querySelector('.message');

// Define the game variables
let score = 0;
let flippedCards = [];
let matchedCards = [];

// Define the card pairs
const cardPairs = [
  { name: 'apple', image: 'apple.jpg' },
  { name: 'banana', image: 'banana.jpg' },
  { name: 'cherry', image: 'cherry.jpg' },
  { name: 'date', image: 'date.jpg' },
  { name: 'elderberry', image: 'elderberry.jpg' },
  { name: 'fig', image: 'fig.jpg' },
  { name: 'grape', image: 'grape.jpg' },
  { name: 'honeydew', image: 'honeydew.jpg' },
  { name: 'ice cream', image: 'ice cream.jpg' },
  { name: 'jackfruit', image: 'jackfruit.jpg' },
  { name: 'kiwi', image: 'kiwi.jpg' },
  { name: 'lemon', image: 'lemon.jpg' },
  { name: 'mango', image: 'mango.jpg' },
  { name: 'nectarine', image: 'nectarine.jpg' },
  { name: 'orange', image: 'orange.jpg' },
  { name: 'papaya', image: 'papaya.jpg' },
  { name: 'quince', image: 'quince.jpg' },
  { name: 'raspberry', image: 'raspberry.jpg' },
  { name: 'strawberry', image: 'strawberry.jpg' },
  { name: 'tangerine', image: 'tangerine.jpg' },
  { name: 'ugli fruit', image: 'ugli fruit.jpg' },
  { name: 'victoria plum', image: 'victoria plum.jpg' },
  { name: 'watermelon', image: 'watermelon.jpg' },
  { name: 'xigua', image: 'xigua.jpg' },
  { name: 'yellow passionfruit', image: 'yellow passionfruit.jpg' },
  { name: 'zucchini', image: 'zucchini.jpg' }
];

// Shuffle the card pairs
function shuffleCardPairs() {
  const shuffledCardPairs = [];
  for (let i = 0; i < cardPairs.length; i++) {
    shuffledCardPairs.push(cardPairs[i]);
    shuffledCardPairs.push(cardPairs[i]);
  }
  for (let i = shuffledCardPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCardPairs[i], shuffledCardPairs[j]] = [shuffledCardPairs[j], shuffledCardPairs[i]];
  }
  return shuffledCardPairs;
}

// Create the card deck
function createCardDeck() {
  const shuffledCardPairs = shuffleCardPairs();
  for (let i = 0; i < cards.length; i++) {
    cards[i].dataset.name = shuffledCardPairs[i].name;
    cards[i].dataset.image = shuffledCardPairs[i].image;
  }
}

// Flip a card
function flipCard(card) {
  card.classList.add('flipped');
  flippedCards.push(card);
  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

// Check for a match
function checkForMatch() {
  if (flippedCards[0].dataset.name === flippedCards[1].dataset.name) {
    matchedCards.push(flippedCards[0]);
    matchedCards.push(flippedCards[1]);
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    messageDisplay.textContent = 'Match!';
    flippedCards = [];
  } else {
    messageDisplay.textContent = 'No match!';
    setTimeout(() => {
      flippedCards[0].classList.remove('flipped');
      flippedCards[1].classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
  if (matchedCards.length === cards.length) {
    messageDisplay.textContent = 'Congratulations! You won!';
  }
}

// Add event listeners to the cards
for (let card of cards) {
  card.addEventListener('click', () => {
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
      flipCard(card);
    }
  });
}

// Create the card deck
createCardDeck();