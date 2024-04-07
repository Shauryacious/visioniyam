import React from 'react';
import { isWindows, isMacOs } from 'react-device-detect';

const DownloadComponent = (props) => {
  return (
    <div>
      {isWindows && props.islogin&& (
        <p style={{position:"relative"}}>
          <a href="https://drive.google.com/file/d/1J0WzNtkJyBDVY9cJWq3_-M-Qd8zvK-wv/view?usp=sharing " target='_blank'style={{color:'black',textDecoration:"none"}}>
          <i class="fa-brands fa-windows" style={{paddingRight:"20px"}}></i>
          Download for Windows
          </a>
        </p>
      )}
      {isWindows && !props.islogin&& (
        <p style={{position:"relative"}} disabled>
          <a href="https://drive.google.com/file/d/1J0WzNtkJyBDVY9cJWq3_-M-Qd8zvK-wv/view?usp=sharing " target='_blank'style={{color:'black',textDecoration:"none"}}>
          <i class="fa-brands fa-windows" style={{paddingRight:"20px"}}></i>
          Please sign up/Login to download file
          </a>
        </p>
      )}
      {isMacOs && !props.islogin&&  (
        <p disabled>
          <a href="https://drive.google.com/file/d/1J0WzNtkJyBDVY9cJWq3_-M-Qd8zvK-wv/view?usp=sharing " target='_blank' style={{color:"black",textDecoration:"none"}}>
          <i class="fa-brands fa-apple" style={{paddingRight:"20px"}}></i>
          Please sign up/Login to download file</a>
        </p>
      )}
        {isMacOs && props.islogin&&  (
        <p>
          <a href="https://drive.google.com/file/d/1J0WzNtkJyBDVY9cJWq3_-M-Qd8zvK-wv/view?usp=sharing " target='_blank' style={{color:"black",textDecoration:"none"}}>
          <i class="fa-brands fa-apple" style={{paddingRight:"20px"}}></i>
            Download for macOS</a>
        </p>
      )}
      {!isWindows && !isMacOs && (
        <p>Sorry, your operating system is not supported for download.</p>
      )}
    </div>
  );
};

export default DownloadComponent;
