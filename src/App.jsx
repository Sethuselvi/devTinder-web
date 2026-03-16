import { BrowserRouter,Routes,Route } from "react-router"
import Body from "./components/Body"
import Feed from "./components/Feed"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Connections from "./components/Connections"
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
      <Route path="/connections" element={<Connections/>}/>
      <Route path="/requests" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
</>
  
  )
}

export default App
