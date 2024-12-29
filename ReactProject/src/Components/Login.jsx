import React, { useEffect, useState } from 'react'
import Signup from './Signup'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  let [logindata,setlogindata]=useState({
    email:"",
    password:""
  })

  let {email,password}=logindata

  let {id}=useParams()

  let handleChange=(e)=>{
    let {name,value}=e.target
    setlogindata({...logindata,[name]:value})
  }

  let navigate=useNavigate()

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(logindata.email)) {
      alert("Please enter a valid email.");
      return false;
    }
  
    if (logindata.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    return true;
  };
  

 

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validateInputs()) return;
      alert("login successfull")
      navigate("/")
    } catch (error) {
      console.error("Error fetching user details:", error);
      alert("Unable to login. Please try again later.");
    }
  };
  

  

  return (
    <div id='parent'>
      <div id='logincard'>
        <div>
          <div className='head' ><h1 align="center" >LOGIN</h1></div>
          <br />
          <form action="" id='loginform' onSubmit={handleSubmit}>
            <label htmlFor="">Enter E-Mail : </label>
            <input type="email" name="email" value={email} id="" placeholder='example@gmail.com' onChange={handleChange} />
            <br /><br />
            <label htmlFor="">Enter Password: </label>
            <input type="password" name="password" value={password} id="" placeholder='enter password' onChange={handleChange} />
            <br /><br /><br />
            <center>
             <button id='btn' type='submit' >LOGIN</button>
            </center>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Login