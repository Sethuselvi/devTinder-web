import { BrowserRouter,Routes,Route } from "react-router"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App(){
  return (
    <>
    <BrowserRouter base="/">
    <Routes>
      <Route path="/" element={<Body/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
</>
  
  )
}

export default App
