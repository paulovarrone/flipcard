let currentCard = null;

function cardClicked(card) {
  if (currentCard) {
    currentCard.classList.remove('rotate');
  }
  
  card.classList.toggle('rotate');
  currentCard = card;
}

