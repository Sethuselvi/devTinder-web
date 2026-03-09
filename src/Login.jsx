import React, { useState, } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from './utils/userSlice'
import axios from 'axios'
const Login = () => {

  const [emailId,setemailId]= useState("sethuselvi@gmail.com")
  const [password,setpassword] =useState("Selvi1998@")
  const dispatch = useDispatch();

  const handleLogin = async ()=>{
    try{
    const res = await axios.post("http://localhost:3000/login",{emailId,password},{withCredentials:true})
    dispatch(addUser(res.data))
  }catch(err){
      console.error(err);
    }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
  <div className="card-body ">
    <h2 className="card-title justify-center">Login</h2>
   <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" className="input" value={emailId} onChange={(e)=>{setemailId(e.target.value)}}/>
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
</fieldset>
   </div>
    <div className="card-actions justify-center  my-4">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
   
  )
}

export default Login