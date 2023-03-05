export default function Card({ symbol, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <p className='card-symbol'>{symbol}</p>
    </div>
  );
}
