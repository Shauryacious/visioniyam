import React from 'react'
import '../CSS/card.css'
import '../CSS/about.css'
import arun from '../images/arun.jpg';
import karan from '../images/karan.jpg';
import saurya from '../images/shaurya.jpg';
import AboutUs from './AboutUs';
export default function Card(props) {
  return (
    <>
     <AboutUs></AboutUs>
    <div style={{paddingBottom:"100px"}}>
    <div style={{textAlign:"center",textAlign:"center",fontSize:"30px",fontFamily:"poppins",fontWeight:"poppins",fontWeight:"700",width:"100%",paddingBottom:"40px"}}>About US</div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{display:"flex",gap:"150px",width:"100%",left:"60px",width:'fit-content'}}>
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 cardhovereffect">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src={arun} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Arun Rathaur
    </h4>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
     Frontend
    </p>
    1st year Computer Science and Engineering at NIT Raipur
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <a href="https://www.linkedin.com/in/arun-rathaur-5995651b7/" target="_blank">
  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
</span>
</a>
<a href="https://twitter.com/arunrathaur001" target="_blank">
<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>
</a>
  </div>
</div>
   {/* Card 2 */}
   <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 cardhovereffect">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src={saurya} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      shaurya Bansal
    </h4>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      Backend
    </p>
    <div>
        1st year Computer Science and Engineering at NIT Raipur
    </div>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <a href="https://www.linkedin.com/in/shauryacious/" target="_blank">
  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
</span>
</a>
<a href="https://twitter.com/Shauryacious" target="_blank">
<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>
</a>
  </div>
</div>
    {/* Card 3 */}
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 cardhovereffect">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-60">
    <img src={karan} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Karan Mangalani
    </h4>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      AI/ML
    </p>
    <div>
        1st year Information and Technology at NIT Raipur
    </div>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <a href="https://www.linkedin.com/in/karan-manglani-423915187/" target="_blank">
  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
</span>
</a>
<a href="https://twitter.com/mkaran9721" target="_blank">
<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>
</a>
  </div>
</div>
    </div>
    </div>
   
    </div>
    </>
  )
}
