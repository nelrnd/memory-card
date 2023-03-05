import { useState } from 'react';
import Scoreboard from './Scoreboard';
import Board from './Board';
import './styles.css';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function incrementScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
  }

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Board incrementScore={incrementScore} resetScore={resetScore} />
    </div>
  );
}
