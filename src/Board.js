import { useState } from 'react';
import Card from './Card';

export default function Board() {
  const [cards, setCards] = useState([
    { symbol: '🍎', clicked: false },
    { symbol: '🍐', clicked: false },
    { symbol: '🍊', clicked: false },
    { symbol: '🍋', clicked: false },
    { symbol: '🍌', clicked: false },
    { symbol: '🍉', clicked: false },
    { symbol: '🍇', clicked: false },
    { symbol: '🍓', clicked: false },
    { symbol: '🍒', clicked: false },
    { symbol: '🍍', clicked: false },
    { symbol: '🍑', clicked: false },
    { symbol: '🥝', clicked: false },
  ]);

  function shuffleCards() {
    const cardsCopy = [...cards];
    for (let i = cardsCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cardsCopy[i];
      cardsCopy[i] = cardsCopy[j];
      cardsCopy[j] = temp;
    }
    setCards(cardsCopy);
  }

  function handleCardClick(card) {
    card.clicked = true;
    shuffleCards();
  }

  return (
    <div className='board'>
      {cards.map((card, id) => (
        <Card
          key={id}
          symbol={card.symbol}
          clicked={card.clicked}
          handleClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
}
