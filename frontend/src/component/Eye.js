import React, { useState } from 'react';

const EyeMovement = () => {
  const [eyeballPosition, setEyeballPosition] = useState({ x: 0, y: 0 });

  const easeOutSine = (x) => {
    return Math.sin((x * Math.PI) / 2);
  };

  const handleMouseMove = (event) => {
    const eye = document.querySelector('.eye');
    const ball = document.querySelector('.ball');

    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distanceX = mouseX - eyeCenterX;
    const distanceY = mouseY - eyeCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const maxMove = 25 * (distance > 200 ? 200 / distance : 1);

    const angle = Math.atan2(distanceY, distanceX);
    const eyeballX = Math.cos(angle) * maxMove * easeOutSine(1);
    const eyeballY = Math.sin(angle) * maxMove * easeOutSine(1);

    setEyeballPosition({ x: eyeballX, y: eyeballY });
  };

  return (
    <svg
      height="400px"
      width="400px"
      className="eye"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      onMouseMove={handleMouseMove}
    >
      <path style={{ fill: '#E4F1FB' }} d="M512,256c0,0-85.333,170.667-256,170.667S0,256,0,256S85.333,85.333,256,85.333S512,256,512,256z" />
      <path style={{ fill: '#C9E3Fb' }} d="M512,256c0,0-85.333,170.667-256,170.667c0-42.667,0-284.444,0-341.333C426.667,85.333,512,256,512,256z" />
      <circle style={{ fill: '#78B9EB' }} cx="256" cy="256" r="128" />
      <path style={{ fill: '#5A8BB0' }} d="M256,128c70.692,0,128,57.307,128,128s-57.308,128-128,128" />
      <circle style={{ fill: '#ffffff' }} cx="256" cy="256" r="70" />
      <g className="ball-group">
        <circle cx="255" cy="255" r="42.667" className="ball" style={{ transform: `translate(${eyeballPosition.x}px, ${eyeballPosition.y}px)` }} />
      </g>
    </svg>
  );
};

export default EyeMovement;
