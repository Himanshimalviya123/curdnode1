import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Registration from "./pages/registration";
import Login from "./pages/login";
import UserDashboard from "./pages/userdashboard";


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
         <Route path="registration" element={<Registration/>}/>
         <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
      <Routes>
         <Route path="/dashboard" element={<UserDashboard/>}>
         
         </Route>
      </Routes>
    </BrowserRouter>   
    </>
  )
}
export default App;