import React, { useState } from 'react';
import "./SignUp.css"
function SignUp({ onSubmit }) {
const[data,setData]=useState({
    name:"",
    email:"",
    password:"",
})
const handleEvent=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(data);

  onSubmit(data)
}

  return (
    <>
    
    <div className="flip-card__back">
  <div className="title">Sign up</div>
  <form className="flip-card__form" onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="name" 
      placeholder="Name" 
      className="flip-card__input" 
      value={data.name} 
      onChange={handleEvent} 
    />
    <input 
      type="email" 
      name="email" 
      placeholder="Email" 
      className="flip-card__input" 
      value={data.email} 
      onChange={handleEvent} 
    />
    <input 
      type="password" 
      name="password" 
      placeholder="Password" 
      className="flip-card__input" 
      value={data.password} 
      onChange={handleEvent} 
    />
    <button type="submit" className="flip-card__btn">Confirm!</button>
  </form>
</div>

    </>
  );
}

export default SignUp;
