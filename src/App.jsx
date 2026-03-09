import { BrowserRouter,Routes,Route } from "react-router"
import Body from "./Body"
import Feed from "./Feed"
import Login from "./Login"
import Profile from "./Profile"
import {Provider} from 'react-redux'
import appStore from "./utils/appStore"

function App(){
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter base="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Feed/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
</>
  
  )
}

export default App
