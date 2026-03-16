import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userSlice';
import feedReducer from './feedSlice'
import connectionReducer from './connectionSlice'
const appStore = configureStore({
//Add this slice to appStore
reducer:{
user:useReducer,
feed:feedReducer,
connections:connectionReducer
}

})

export default appStore