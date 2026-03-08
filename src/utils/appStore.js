import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userSlice';
const appStore = configureStore({
//Add this slice to appStore
reducer:{
user:useReducer,
}

})

export default appStore