import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccesss } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])

  const handlelogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccesss('User Loggedout'); 
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

  const fetchProducts = async () => {
    try {
      const url ='https://localhost:8080/products';
      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setProducts(result);

    } catch (err) {
      handleError(err);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <div>
        {
          products && products?.map((item, index) => (
            <ul key={index}>
              <span>{item.name} : {item.price}</span>
            </ul>
          ))
        }
      </div>
      <button onClick={handlelogout}>Logout</button>
      <ToastContainer/>
    </div>
  )
}

export default Home
