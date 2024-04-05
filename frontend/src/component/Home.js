import React, { useEffect } from 'react';
import DownloadComponent from './Download-Component';
import EyeMovement from './Eye';
import ButtonWithBackground from './button';
export default function Home(props) {
  return (
    <>
      <div style={{ paddingTop: "120px", display: "flex", paddingBottom: '10px',gap:"300px" ,paddingLeft:"100px",height:"600px"}}>
        <div style={{ position: "relative", top: "20px" }}>
          <div style={{ position: "relative", left: "100px", fontFamily: "poppins", fontWeight: "700", fontSize: '50px' }}>Control With Eye</div>
          <div style={{ width: '500px', position: "relative", left: "100px", fontFamily: "poppins", fontWeight: "400", fontSize: "16px" }}>Visionary is a free program that enables you to control the mouse pointer on your computer screen just by moving your head.</div>
        </div>
        <div>
          <EyeMovement></EyeMovement>
        </div>
      </div>
      <div style={{ position: 'absolute', top: "440px",left:'15%'}}>
      <ButtonWithBackground></ButtonWithBackground>
        
      </div>
     
    </>
  );
}
