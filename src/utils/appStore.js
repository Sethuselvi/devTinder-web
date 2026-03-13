import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userSlice';
import feedReduer from './feedSlice'
const appStore = configureStore({
//Add this slice to appStore
reducer:{
user:useReducer,
feed:feedReduer,
}

})

export default appStore