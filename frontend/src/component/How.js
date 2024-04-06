import React from 'react'
import '../CSS/how.css'
export default function How() {
  return (
    <>
    <div style={{paddingLeft:'200px'}} >
   
        <div style={{textAlign:'center',width:'100%',fontSize:"23px",fontWeight:"600",marginLeft:"-200px",textAlignLast:"center",padding:'50px'}}>Revolutionizing User Interaction with Cutting-Edge Face Landmark Detection Technology</div>
        <div style={{width:"80%"}}>
        <div style={{fontSize:'18px',fontWeight:'400'}}>
Our groundbreaking application leverages state-of-the-art face landmark movement detection technology to transform user interaction. This innovative system meticulously tracks the nuanced movements of the face, translating them into precise and intuitive mouse controls. As a result, users enjoy a seamless and fluid experience as they effortlessly navigate through their digital environment with just a glance.</div>
    <div style={{display:'flex',gap:"100px"}}>
      <div className='leftconetent'style={{position:'relative',top:'100px'}}>
      <div style={{fontSize:'35px',paddingBottom:"30px"}}>How it works</div>
      <div style={{paddingBottom:"30px"}}>Empowering accessibility through facial recognition, Visioniyam allows individuals with limited mobility to control their computer cursor using facial expressions and eye movements. Here's a breakdown of how our innovative system works:
</div>
<div >Our system meticulously tracks the subtle movements of these facial landmarks.
</div>
      </div>
      <div className='cardshow'>
      <div className='section1' style={{display:"flex",gap:"30px"}}>
    {/* card 1 */}
    <div class="max-w-sm w-full lg:max-w-full lg:flex" style={{paddingTop:"50px",marginBottom:"50px",width:"300px",height:"300px"}}>
    
 
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal howboxdata" style={{display:'flex'}}>
    <div class="mb-8" >
      
      <div class="text-gray-900 font-bold text-xl mb-2 2xl">
Facial Landmark Identification:</div>
      <p class="text-gray-700 text-base">
      Utilizing cutting-edge facial landmark detection tools such as Google's MediaPipe, Visioniyam pinpoints 478 key points on the face, mapping precise features like eyes, nose, and mouth.</p>
    </div>
  
  </div>
</div>
{/* card 2 */}
 <div class="max-w-sm w-full lg:max-w-full lg:flex" style={{paddingTop:"50px",marginBottom:"50px",width:"300px",height:"300px"}}>
 
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal howboxdata">
    <div class="mb-8">
      
      <div class="text-gray-900 font-bold text-xl mb-2 2xl">Subtle Motion Tracking:</div>
      <p class="text-gray-700 text-base">
      The system meticulously monitors subtle shifts in these facial landmarks, interpreting these changes to understand the user's desired actions.</p>
    </div>
  
  </div>
</div>
</div>
<div class='Section2' style={{display:"flex",gap:"30px",position:'relative',top:"-60px"}}>
{/* card 3 */}
<div class="max-w-sm w-full lg:max-w-full lg:flex" style={{paddingTop:"50px",marginBottom:"50px",width:"300px",height:"300px"}}>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal howboxdata">
    <div class="mb-8">
      
      <div class="text-gray-900 font-bold text-xl mb-2 2xl">Real-time Cursor Control:</div>
      <p class="text-gray-700 text-base">

      Transforming these tracked movements into immediate mouse cursor actions, Visioniyam translates facial landmark distances into on-screen cursor movements.
</p>
    </div>
  
  </div>
</div>
{/* card 4 */}
<div class="max-w-sm w-full lg:max-w-full lg:flex" style={{paddingTop:"50px",marginBottom:"50px",width:"300px",height:"300px"}}>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal howboxdata">
    <div class="mb-8">
      
      <div class="text-gray-900 font-bold text-xl mb-2 2xl">Enhanced User Experience:</div>
      <p class="text-gray-700 text-base">
      Tailor your experience with customizable sensitivity and control settings, effortlessly navigating digital interfaces with minimal facial input.</p>
    </div>
  
  </div>
</div>
</div>
</div>
    </div>
    </div>
    </div>
    </>
  )
}
