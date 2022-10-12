import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import {auth } from "./FirebaseConfig"
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();
  const loginFormSubmitHandler=(e)=>{
    e.preventDefault();
    //fancy firebase shit
    auth.signInWithEmailAndPassword(email,password).then((user)=>{
      if(user){
        navigate('/')
      }
    }
    ).catch(err=>console.warn(err))
  }
  const registerUser=()=>{
    
     auth.createUserWithEmailAndPassword(email,password).then(user=>{
        if(user){
          navigate('/')
        }
     }
    ).catch(err=>console.warn(err))
  }
  return (
    <div className='login'>
      <Link to='/'>
      <img className='login_logo' alt='amazon logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      <div className='login_container'>
        <h2>Sign-In</h2>
        <form className='login__form' onSubmit={loginFormSubmitHandler}>
          <label>Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>{
               setEmail(e.target.value)
          }}/>
          <label >Password:</label>
          <input type="text" id="password" name="password" value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}/>

          <button className='login_signInButton'>Sign in</button>
        </form>
        <button className='login_registerButton' onClick={registerUser}>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login