export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div>
      <p>Score : {currentScore || 0}</p>
      <p>Best : {bestScore || 0}</p>
    </div>
  );
}
