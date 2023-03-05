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

  return <div className='board'>{cards}</div>;
}
