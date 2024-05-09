import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CSS/readdocs.css';

export default function Readocs(props) {
  const [copyStatus, setCopyStatus] = useState({
    data1: 'Copy',
    data2: 'Copy',
    data3: 'Copy',
    data4: 'Copy'
  });

  const handleCopy = (dataKey) => {
    setCopyStatus((prevStatus) => ({
      ...prevStatus,
      [dataKey]: 'Copied'
    }));
    setTimeout(() => {
      setCopyStatus((prevStatus) => ({
        ...prevStatus,
        [dataKey]: 'Copy'
      }));
    }, 2000); // Reset status after 2 seconds
  };
  function printcolor(){
    console.log(props.color);
  }

  return (
    <>
    <div style={{position:"relative",left:"100px",paddingBottom:"100px"}}>
      <div style={{display:"flex",justifyContent:"center",}}>
      <div className='Readheading1' style={{textAlign: "center",position:"relative",left:"-100px"}}>Documentation</div>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div className='readbox' style={{paddingTop: "40px"}}>
          <div className='Readheading' >*System Requirements - Python &gt;=3.7 & &lt;=3.11</div>
          <div className='Readcontent'><li>1. Download and unzip the software with respect to your Operating System from the link <a className="text-blue-700" href="https://github.com/Shauryacious/visioniyam">[LINK]</a>.</li></div>
          <div className='Readcontent'><li>2. Extract the zip file.</li></div>
          <div className='Readcontent'><li>3. Open your preferred CLI Terminal in the extracted folder, and execute the following commands with respect to your Operating System.</li></div>
          <div className='ReadDocsbox2' style={{width: "75%", position: "relative", left: "30px"}}>
            <div className='Readcosbox1' style={{paddingBottom: "30px"}}>
              <div className='readocsheading1' style={{fontWeight: '600',color:`${props.color==='white'?'white':'black'}`}}>Install Dependencies from CLI Terminal inside the root directory - WINDOWS</div>
              <CopyToClipboard text={"pip install -r requirements.txt"} onCopy={() => handleCopy('data1')}>
                <button className='Readocsbutton ' style={{position:'relative',left:"90%",top:"30px"}}>{copyStatus.data1}</button>
              </CopyToClipboard>
              <div className='readocscontent1'style={{color:"black"}}>pip install -r requirements.txt</div>
            </div>
            <div className='Readcosbox1' style={{paddingBottom: "30px"}}>
              <div className='readocsheading1' style={{fontWeight: '600',color:`${props.color==='white'?'white':'black'}`}}>Execute the system from CLI Terminal inside the root directory - WINDOWS</div>
              <CopyToClipboard text={"python Start.py"} onCopy={() => handleCopy('data2')}>
                <button className='Readocsbutton'  style={{position:'relative',left:"90%",top:"30px"}}>{copyStatus.data2}</button>
              </CopyToClipboard>
              <div className='readocscontent1'style={{color:"black"}} >python Start.py</div>
            </div>
            <div className='Readcosbox1' style={{paddingBottom: "30px"}}>
              <div className='readocsheading1' style={{fontWeight: '600',color:`${props.color==='white'?'white':'black'}`}}>Install Dependencies from CLI Terminal inside the root directory - MacOS</div>
              <CopyToClipboard text={"pip3 install -r requirements.txt"} onCopy={() => handleCopy('data3')}>
                <button className='Readocsbutton'  style={{position:'relative',left:"90%",top:"30px"}}>{copyStatus.data3}</button>
              </CopyToClipboard>
              <div className='readocscontent1' style={{color:"black"}}>pip3 install -r requirements.txt</div>
            </div>
            <div className='Readcosbox1' style={{paddingBottom: "30px"}}>
              <div className='readocsheading1' style={{fontWeight: '600',color:`${props.color==='white'?'white':'black'}`}}>Execute the system from CLI Terminal inside the root directory - MacOS</div>
              <CopyToClipboard text={"python3 Start.py"} onCopy={() => handleCopy('data4')}>
                <button className='Readocsbutton'  style={{position:'relative',left:"90%",top:"30px"}}>{copyStatus.data4}</button>
              </CopyToClipboard>
              <div className='readocscontent1' style={{color:"black"}}>python3 Start.py</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
