import React, { useState } from 'react';
import Image from '../images/first.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
export default function Signin(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pnotmatch, setPNotMatch] = useState(true);
  const[token,changetoek]=useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
  };
  const handleSubmit = async(e) => {
    changetoek(true);
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/api/v1/users/signup', {
        name: name,
        email: email,
        password: password,
        passwordConfirm: cpassword
      
      });
    
      if (response.status >= 200 && response.status < 300) {
        navigate('/');
        console.log(response.data.status); 
        console.log(response.data.jwt_token);
        props.changeislogin(true);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    changetoek(false);
  }
    
  
  return (
    <div>
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px', marginBottom: '-60px' }}>
              <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" style={{ color: 'black' }}>
                <img className="w-8 h-8 mr-2" src={Image} alt="Visioniyam Logo" />
                Visioniyam
              </a>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px', marginBottom: '-10px' }}>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create New Account
                </h1>
              </div>
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Name</label>
                <input type="text" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Your Full Name" value={name} onChange={handleNameChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Email</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={handleEmailChange} required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                <input type="password" id="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={handlePasswordChange} required />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={cpassword} onChange={handleCPasswordChange} required />
                {!pnotmatch && <span className="text-red-500">Passwords do not match</span>}
              </div>
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
              {!pnotmatch && <div>Password and Confirm Password Must Be same</div>}
             {token&&<div style={{color:"green"}}>Please Wait</div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
