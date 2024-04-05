import React, { useState } from 'react';
import '../CSS/NevBar.css';
import img from '../images/first.png';
export default function NevBar(props) {
  const [mode, setMode] = useState(0);
  const [home, setHome] = useState("");
  const [how, sethow] = useState("");
  const [aboutus, setaboutus] = useState("");
  const [contect, setcontect] = useState("");

  function changeMode() {
    if (mode % 2 === 0) {
      props.setColor("white");
      props.setBgColor("black");
      console.log("mode1");
    } else {
      props.setColor("black");
      props.setBgColor("white");
      console.log("Mode2");
    }
    setMode(mode + 1);
  }

  function changehomeState() {
    setHome("underline");
    sethow("");
    setcontect("");
    setaboutus("");
  }

  
  function changehowState() {
    setHome("");
    sethow("underline");
    setcontect("");
    setaboutus("");
  }
  
  function changecontectState() {
    setHome("");
    sethow("");
    setcontect("underline");
    setaboutus("");
  }
  function changeaboutus () {
    setHome("");
    sethow("");
    setcontect("");
    setaboutus("underline");
  }
  return (
    <div style={{ color: props.color, background: props.bgColor }}>
      <div style={{ marginLeft: "50px", marginTop: "2%", color: props.color, background: props.bgColor }}>
        <div style={{display:'flex'}}>
          <img src={img} style={{width:"100px",top:"-15px",left:"10px",position:'relative'}}></img>
          <div style={{fontSize:'20px',fontFamily:"poppins",fontWeight:"400px",paddingTop:"20px",position:"relative",left:"15px",top:"-12px"}}>Visioniyam</div>
        </div>
        <div style={{ display: "flex", gap: "40px", fontFamily: "poppins", fontWeight: '100',position:'absolute',left:"35%",top:"0px", fontSize: "17px" }}>
         <a href='#'><div className='headerheading' onClick={changehomeState} style={{ textDecoration: `${home}`,paddingTop:'40px'}}>Home</div></a> 
         <a href='#aboutus'> <div className='headerheading'  onClick={changeaboutus} style={{ textDecoration: `${aboutus}`,paddingTop:'40px'}} >About Us</div></a>
         <a href='#how'><div className='headerheading' onClick={changehowState} style={{ textDecoration: `${how}`,paddingTop:'40px' }}>How?</div></a> 
          <a href='#readocs'><div className='headerheading' onClick={changecontectState} style={{ textDecoration: `${contect}`,paddingTop:'40px' }}>Read Docs</div></a>
          <a href='#aboutus'><div className='headerheading' onClick={changecontectState} style={{ textDecoration: `${contect}`,paddingTop:'40px' }}>Read Docs</div></a>
          </div>
          <div className="form-check form-switch" style={{position:"absolute",left:"78%",top:"41px"}}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeMode}/>
          </div>
          {/* <button type="button" className="btn btn-primary nevebarbutton" style={{ color: props.color, background: props.bgColor, position: "absolute", right: "2%", top: "30px" }}>Login</button>
          <button type="button" className="btn btn-primary nevebarbutton" style={{ color: props.color, background: props.bgColor, position: "absolute", right: "8%", top: "30px" }}>SignIn</button> */}
      </div>
    </div>
  );
}
