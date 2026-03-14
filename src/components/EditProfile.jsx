import { useState, } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import UserCard from './UserCard'
import{Link} from 'react-router'

const EditProfile = ({user}) => {
    const [firstName,setfirstName]= useState(user.firstName)
  const [lastName,setlastName] =useState(user.lastName)
  const [photoUrl,setphotoUrl] =useState(user?.photoUrl)
  const [age,setage] =useState(user?.age)
  const [gender,setgender] =useState(user?.gender)
  const [about,setabout] =useState(user?.about)
  const [toast,settoast] = useState(false)
  
  

  const [error,seterror] = useState("");
  const dispatch = useDispatch();
  


  const saveProfile = async ()=>{
    //Clear error after updating correct details
    seterror("")
    try{
    const res = await axios.patch(BASE_URL + "/profile/edit",{firstName,lastName,photoUrl,age,gender,about},{withCredentials:true})
    //Updated the store with updated profile details
    dispatch(addUser(res?.data?.data))
    settoast(true)
    //Clearing toast after cetain interval
    setTimeout(()=>{
    settoast(false)
    },3000)
  }catch(err){
      seterror(err.response.data)
    }
  }
  return (
    <>
    <div className="flex justify-center my-10">
   <div className="flex justify-center mx-10">
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
<div className="dropdown">
   <div tabIndex={0} role="button" className="btn m-1 w-full">{gender}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full  p-2 shadow-sm">
   <li className="hover:bg-gray-400 hover:text-black" value="male" onClick={(e)=>{setgender("male");e.target.blur()}}><Link>Male</Link></li>
    <li className="hover:bg-gray-400 hover:text-black" value="female" onClick={(e)=>{setgender("female");e.target.blur()}}><Link>Female</Link></li>
  </ul>
</div>
  <legend className="fieldset-legend">About</legend>
  <textarea type="text" className="input h-30" value={about} onChange={(e)=>{setabout(e.target.value)}}/>
</fieldset>
   </div>
   <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center  my-4">
      <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
    </div>
  </div>
</div>
    </div>
    <UserCard user={{firstName,lastName,photoUrl,age,gender,about}}/>
    </div>
    {toast && <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>}
    </>
  )
}

export default EditProfile