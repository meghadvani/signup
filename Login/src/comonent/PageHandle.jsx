import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

function PageHandle() {
    const[isLogin,setIsLogin]=useState(false)
    const[creditintial,setCreditintial]=useState(null)
    const[userData,setUserData]=useState(null)
    const handleFormSubmit=(data)=>{
        if(isLogin){
            setUserData(data)
        }else{
            setCreditintial({ email: data.email, password: data.password });
            setIsLogin(true);
        }
    }

  return (
    <div style={{marginLeft:"450px"}}>
      
    {userData?(
        <h1>"Welcome! Oh thank God you remembered your password, because we sure didn't." 😅</h1>)
        :isLogin?(
            <Login onSubmit={handleFormSubmit} credentials={creditintial}/>
        ):(
            <SignUp onSubmit={handleFormSubmit}/>
        )
    
    }
    {
        !userData&&
        <button style={{marginLeft:"140px",marginTop:"20px"}} onClick={()=>setIsLogin(!isLogin)}>
            {isLogin?"Sign-UP":"Login"}
        </button>

    }
    </div>
  )
}

export default PageHandle
