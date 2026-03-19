import axios from "axios";
import {BASE_URL} from "../utils/constants"
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import {motion,useMotionValue,useTransform} from 'framer-motion'
import { useState } from "react";

const UserCard = ({user}) => {
     const [cards,setcards] =useState({user})
    const {_id,firstName,lastName,photoUrl,age,gender,about} = user;
     const dispatch = useDispatch()
    const handleSendRequest = async (status,userId)=>{
      try{
        const res = await axios.post(BASE_URL + '/request/send/' + status + '/'+ userId,{},{withCredentials:true})
       
        dispatch(removeFeed(userId))

      }catch(err){
        console.error(err)
      }
    }
   const x = useMotionValue(0)
   const rotate = useTransform(x,[-150,150],[-18,18])
  

   const handleDragEnd = () =>{
    if(x.get() > 50){ 
      // Swipe Right → Interested
      handleSendRequest("intrested",_id)
    }
    else if(x.get() < -50){
       // Swipe Left → Ignored
       handleSendRequest("ignored",_id)
    }
   }

  return (
    <motion.div className="card bg-base-200 w-96 shadow-sm" drag="x" dragConstraints={{left:0,right:0}} style={{x,rotate}} onDragEnd={handleDragEnd}>
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + "," + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary" onClick={()=>{handleSendRequest("ignored",_id)}}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>{handleSendRequest("intrested",_id)}}>Intrested</button>
    </div>
  </div>
</motion.div>
)
}

export default UserCard