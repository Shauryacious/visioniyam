import React from 'react';
import '../CSS/buttons.css'; 
import DownloadComponent from './Download-Component';
const ButtonWithBackground = () => {
  return (
    <div className="container">
      <div className="button-wrapper">
        <button className="homebutton"><DownloadComponent></DownloadComponent></button>
        <div className="button-bg"></div>
      </div>
    </div>
  );
};

export default ButtonWithBackground;
