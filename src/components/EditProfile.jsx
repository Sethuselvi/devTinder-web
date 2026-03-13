import { useState, } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import {useNavigate} from 'react-router'
import { BASE_URL } from '../utils/constants'

const EditProfile = ({user}) => {
    const [firstName,setfirstName]= useState(user.firstName)
  const [lastName,setlastName] =useState(user.lastName)
  const [photoUrl,setphotoUrl] =useState(user.photoUrl)
  const [age,setage] =useState(user.age)
  const [gender,setgender] =useState(user.gender)
  const [about,setabout] =useState(user.about)

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
  return (
   <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
  <div className="card-body ">
    <h2 className="card-title justify-center">Edit Profile</h2>
   <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">First Name</legend>
  <input type="text" className="input" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}}/>
  <legend className="fieldset-legend">Last Name</legend>
  <input type="text" className="input" value={lastName} onChange={(e)=>{setlastName(e.target.value)}}/>
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" className="input" value={photoUrl} onChange={(e)=>{setphotoUrl(e.target.value)}}/>
  <legend className="fieldset-legend">Age</legend>
  <input type="text" className="input" value={age} onChange={(e)=>{setage(e.target.value)}}/>
  <legend className="fieldset-legend">Gender</legend>
  <input type="text" className="input" value={gender} onChange={(e)=>{setgender(e.target.value)}}/>
  <legend className="fieldset-legend">About</legend>
  <input type="text" className="input" value={about} onChange={(e)=>{setabout(e.target.value)}}/>
</fieldset>
   </div>
   <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center  my-4">
      <button className="btn btn-primary" >Save Profile</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default EditProfile