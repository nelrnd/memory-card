export default function Card({ symbol, clicked, handleClick }) {
  return (
    <div className={clicked ? 'card clicked' : 'card'} onClick={handleClick}>
      <p className='card-symbol'>{symbol}</p>
    </div>
  );
}
