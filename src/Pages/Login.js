import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccesss } from '../utils';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [LoginInfo, setLoginInfo] = useState({
    email: '',
    password: '' 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = LoginInfo;
  
    if (!email || !password) {
      return toast.error("Email and password are required!");
    }
  
    if (password.length < 4) {
      return toast.error("🔒 Password must be at least 4 characters long!");
    }
  
    try {
      const url = "http://localhost:8080/auth/Login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginInfo),
      });
  
      const result = await response.json();
  
      const { success, message, error } = result;
  
      if (success) {
        handleSuccesss(message);
        setTimeout(() => navigate("/home"), 500);
      } else {
        const details = error?.details?.[0]?.message || message || "Login failed!";
        handleError(details);
      }
    } catch (error) {
      handleError("Login failed. Please try again!");
      console.error("Login error:", error);
    }
  };
  
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className='login-form'>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input 
            onChange={handleChange} 
            type='email' 
            name='email' 
            placeholder='Enter your email...' 
            value={LoginInfo.email} 
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input 
            onChange={handleChange} 
            type='password' 
            name='password'  
            placeholder='Enter your password...' 
            value={LoginInfo.password} 
          />
        </div>
        <button className='login-button' type='submit'>Login</button>
        <span> Don't have an account? 
          <Link to="/signup"> Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
