export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className='Scoreboard'>
      <p>Score : {currentScore || 0}</p>
      <p>Best : {bestScore || 0}</p>
    </div>
  );
}
