import React from 'react'
import how from '../animation/how.json'
import Lottie from 'lottie-react';

export default function How() {
  return (
    <>
    <div style={{paddingLeft:"100px",height:"600px"}}>
   
        <div style={{textAlign:'center',width:'100%',fontSize:"30px",fontWeight:"800",fontFamily:"poppins"}}>How it works</div>
    <div style={{display:"flex", gap:"100px",paddingBottom:"50px",paddingTop:'50px'}}>
    <div><Lottie animationData={how} style={{height:"300px",position:"relative",left:"30px"}} ></Lottie></div>
    <div style={{width:"700px"}}>
        <div style={{fontSize:'24px',fontWeight:'500'}}>Our innovative application harnesses cutting-edge iris detection technology to revolutionize user interaction. By tracking the subtle movements of the eye, our app seamlessly translates them into precise and intuitive mouse control. Users experience unparalleled fluidity as they navigate through their digital environment with the mere glance of an eye. This breakthrough technology not only enhances accessibility but also offers a new level of efficiency and convenience, empowering users to effortlessly engage with their devices in a natural and intuitive manner.</div>
    </div>
    </div>
    </div>
    </>
  )
}
