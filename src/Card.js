import { useState, useRef } from 'react';

export default function Card({ symbol, handleClick }) {
  const cardRef = useRef(null);
  let bounds;

  function rotateCard(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `rotate3d(${center.y / 100}, ${
      -center.x / 100
    }, 0, ${Math.log(distance) * 2}deg)`;
  }

  function handleMouseEnter() {
    bounds = cardRef.current.getBoundingClientRect();
    document.addEventListener('mousemove', rotateCard);
  }

  function handleMouseLeave() {
    document.removeEventListener('mousemove', rotateCard);
    cardRef.current.style.transform = '';
  }

  return (
    <div
      className='card'
      onClick={handleClick}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className='card-symbol'>{symbol}</p>
    </div>
  );
}
