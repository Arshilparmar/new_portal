import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccesss } from '../utils';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    
    if (!name || !email || !password) {
      return toast.error('Name, email, and password are required!');
    }

    if (password.length < 4) {
      return toast.error('🔒 Password must be at least 4 characters long!');
    }

    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });

      const result = await response.json();
      
      const { success, message, error } = result;

      if (success) {
        handleSuccesss(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if(error) {
        const details = error?.details[0]?.message || 'Signup failed!';
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError('Signup failed. Please try again!');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className='signup-container'>
      <h1>Signup</h1>
      <form onSubmit={handleSignup} className='signup-form'>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <input 
            onChange={handleChange} 
            type='text' 
            name='name' 
            autoFocus 
            placeholder='Enter your name...' 
            value={signupInfo.name} 
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input 
            onChange={handleChange} 
            type='email' 
            name='email' 
            placeholder='Enter your email...' 
            value={signupInfo.email} 
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input 
            onChange={handleChange} 
            type='password' 
            name='password'  
            placeholder='Enter your password...' 
            value={signupInfo.password} 
          />
        </div>
        <button className='signup-button' type='submit'>Signup</button>
        <span>Already have an account? 
          <Link to="/login"> Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
