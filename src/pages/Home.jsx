import axios from "axios";
import BackendUrl from '../utils/BackendUrl';
import { useState } from "react";

const Home=()=>{
  const [image,setImage]=useState("")
  const onChangeHandler=(e)=>{
    setImage(e.target.files[0]);
    console.log(image)
  }
  const onsubmitHandler=async()=>{
    const formData=new FormData();
    formData.append("image",image)
     let api=`${BackendUrl}upload`;
     try {
        const response = await axios.post(api, formData);
        console.log(response)
        // alert(File: + response.data.filename+"successfully uploaded)
     } catch (error) {
       console.log(error)
     }
  }

 return(
    <>
     <h3>Welcome to home page!!</h3>
    
     Upload your images: <input type="image" onChange={onChangeHandler}/><br/><br/>
     <button onClick={onsubmitHandler}>Upload</button>
    </>
  )
}
export default Home;