import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/first.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function Login(props) {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/api/v1/users/login', {
        email: email,
        password: password
      });

      if (response.status >= 200 && response.status < 300) {
        console.log(response.data.status);
        console.log(response.data.jwt_token);
        navigate('/');
        props.changeislogin(true);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  }

  return (
    <div>
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', marginBottom: '-30px' }}>
              <div><img src={Image} style={{ width: "60px", paddingRight: '10px' }} alt="Visioniyam Logo" /></div>
              <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black">
                Visioniyam
              </a>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl " style={{textAlign:"center",fontWeight:"600"}}>
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                  <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Please wait...' : 'Log In'}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet? <Link to="/signeup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
