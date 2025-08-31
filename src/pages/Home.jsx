import axios from "axios";
import BackendUrl from "../utils/BackendUrl";
import { useState } from "react";

const Home=()=>{
  const [file,setFile]=useState("")
  const onChangeHandler=(e)=>{
    setFile(e.target.files[0]);
    console.log(file)
  }
  const handleSubmit=async()=>{
    const formData=new FormData();
   let api=`${BackendUrl}upload`
     try {
        const response = await axios.post(api, formData);
        console.log(response)
        alert(`File: + response.data.filename+"successfully uploaded"`)
     } catch (error) {
       console.log(error)
     }
  }
  return(
    <>
     <h3>Welcome to home page!!</h3>
    
 Upload your images: <input type="file" onChange={onChangeHandler}/><br/><br/>
     <button onClick={handleSubmit}>Upload</button>
    </>
  )
}
export default Home;