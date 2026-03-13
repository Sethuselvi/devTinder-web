import {useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../utils/constants'
import { addFeed } from '../utils/feedSlice'
import {useDispatch,useSelector} from 'react-redux'
import UserCard from './UserCard'
const Feed = () => {
   const dispatch = useDispatch();
   //Reading feed
    const feed = useSelector((store)=>store.feed)
  const getFeed = async ()=>{
    
    if(feed) return
    try{
    const res = await axios.get(BASE_URL + "/feed",{withCredentials:true});
    console.log(res)

    //Using feed slice
    dispatch(addFeed(res?.data?.data))
    }catch(err){
    console.error(err);
    }    
  }
  useEffect(()=>{
    getFeed();
  },[])
  return (
    <UserCard/>
  )
}

export default Feed