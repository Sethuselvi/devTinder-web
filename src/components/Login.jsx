import { useState, } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import {useNavigate} from 'react-router'
import { BASE_URL } from '../utils/constants'
const Login = () => {

  const [emailId,setemailId]= useState("")
  const[firstName,setfirstName]= useState("")
  const[lastName,setlastName]= useState("")
  const [password,setpassword] =useState("")
  const [isLogin,setisLogin] = useState(false)
  const [error,seterror] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();


  const handleLogin = async ()=>{
    try{
    const res = await axios.post(BASE_URL + "/login",{emailId,password},{withCredentials:true})
    dispatch(addUser(res.data))
    return navigator("/")
  }catch(err){
      seterror(err?.response?.data)
    }
  }
  const handleSignUp = async()=>{
    try{
    const res = await axios.post(BASE_URL + "/signup",{firstName,lastName,emailId,password},{withCredentials:true})
    dispatch(addUser(res.data.data))
    return navigator("/profile")
    }catch(err){
      seterror(err?.response?.data)
    }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
  <div className="card-body ">
    <h2 className="card-title justify-center">{isLogin ?"Login":"Sign Up"}</h2>
   <div>
    <fieldset className="fieldset">
  {!isLogin && <><legend className="fieldset-legend">First Name</legend>
  <input type="text" className="input" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}}/>
  <legend className="fieldset-legend">Last Name</legend>
  <input type="text" className="input" value={lastName} onChange={(e)=>{setlastName(e.target.value)}}/></>}
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" className="input" value={emailId} onChange={(e)=>{setemailId(e.target.value)}}/>
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" value={password} onChange={(e)=>{setpassword(e.target.value)}}  onKeyDown={isLogin?handleLogin:handleSignUp}/>
</fieldset>
   </div>
   <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center  my-4">
      <button className="btn btn-primary" onClick={isLogin?handleLogin:handleSignUp}>{isLogin ?"Login":"Sign Up"}</button>
    </div>
    <p className="m-auto cursor-pointer"onClick={()=>setisLogin((value)=>(!value))}>{isLogin ?"New User? Sign up here":"Existing User?Login Here!"}</p>
  </div>
</div>
    </div>
   
  )
}

export default Login