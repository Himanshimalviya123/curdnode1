// import axios from "axios";
// import { useEffect } from "react";
import BackendUrl from "../utils/BackendUrl";
// import { useNavigate } from "react-router-dom";

// const Home=()=>{

//   const navigate = useNavigate();
//  let api=`${BackendUrl}user/userauth`;
//  const userAuntehticate=async()=>{
//    const token = localStorage.getItem("token");
//     if (token)
//     {
//       const response = await axios.post(api, null, {headers: { "x-auth-token": token }} );
//       console.log(response);
//       localStorage.setItem("username", response.data.name);
//       localStorage.setItem("useremail", response.data.email);
//      navigate("/dashboard");
//     }
//   }
//  useEffect(()=>{
//     userAuntehticate();
//  }, [])
//    return(
//         <>
//           <h1> Welcome To Home Page</h1>
//         </>
//     )
// }

// export default Home;









const Home=()=>{
  const handleSubmit=async(e)=>{

  let api=`${BackendUrl}home`;
  }
  return(
    <>
    <h1>welcome to home page!!!</h1>
          <Button variant="primary" type="submit" onClick={handleSubmit}>click here</Button>

    </>
  )
}
export default Home;