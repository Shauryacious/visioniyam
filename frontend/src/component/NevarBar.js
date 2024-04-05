import React, { useState } from 'react';
export default function NevBar(props) {
  return (
    <div style={{  color:"black",background:"white" }}>
      <div style={{ marginLeft: "50px", marginTop: "2%", color:"black",background:"white" }}>
        <div style={{display:'flex'}}>
          <div style={{fontSize:'20px',fontFamily:"poppins",fontWeight:"400px",paddingTop:"20px",position:"relative",left:"15px",top:"-12px"}}>Visioniyam</div>
        </div>
        <div style={{ display: "flex", gap: "40px", fontFamily: "poppins", fontWeight: '100',position:'absolute',left:"35%",top:"0px", fontSize: "17px" }}>
         <a href='#'><div className='headerheading'  style={{ paddingTop:'40px'}}>Home</div></a> 
         <a href='#aboutus'> <div className='headerheading' style={{paddingTop:'40px'}} >About Us</div></a>
         <a href='#how'><div className='headerheading' style={{ paddingTop:'40px' }}>How?</div></a> 
          <a href='#readocs'><div className='headerheading'  style={{paddingTop:'40px' }}>Read Docs</div></a>
          <a href='#aboutus'><div className='headerheading' style={{paddingTop:'40px' }}>Read Docs</div></a>
          </div>
          <div className="form-check form-switch" style={{position:"absolute",left:"78%",top:"41px"}}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>
      </div>
    </div>
  );
}
