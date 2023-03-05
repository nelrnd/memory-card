import { useState } from 'react';
import Card from './Card';

export default function Board() {
  const symbols = [
    '🍎',
    '🍐',
    '🍊',
    '🍋',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🍒',
    '🍍',
    '🍑',
    '🥝',
  ];

  const [cards, setCards] = useState(
    symbols.map((symbol, id) => <Card key={id} symbol={symbol} />)
  );

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

  return <div className='board'>{cards}</div>;
}
