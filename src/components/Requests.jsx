import {useEffect} from 'react'
import { addRequests } from '../utils/requestSlice'
import { useDispatch ,useSelector} from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const Requests = () => {
  const requests = useSelector((store)=>store.requests)
  const dispatch = useDispatch()
    const fetchConnections = async ()=>{
        try{
            const res = await axios.get(BASE_URL + '/user/requests/received',{withCredentials:true})
            dispatch(addRequests(res?.data?.data))

        }catch(err){
           console.error(err); 
        }
    }
    useEffect(()=>{fetchConnections()},[])
    if(!requests) return
    if(requests.length==0) return <h1> No connections </h1>
  return (
    <div className='text-center my-10'>
      <h1 className='text-bold text-3xl'>Connections</h1>
      {requests.map((request)=>{
        const {_id,firstName,lastName,photoUrl,age,gender,about}=request.fromUserId;
        return (
          <div key={_id} className="flex flex-col m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img src={photoUrl} alt="photo" className="w-10 h-10 rounded-full"/>
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
             {age && gender && <p>{age + ", " + gender}</p>}
             <p>{about}</p>
            </div>
          </div>
        )
      })}
      </div>
  )
}

export default Requests