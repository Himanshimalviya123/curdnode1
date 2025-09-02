import axios from "axios";
import { useState } from "react";
const Home=()=>{
  const [file,setFile]=useState("")
  const onChangeHandler=(e)=>{
    setFile(e.target.files[0]);
    console.log(file)
  }
  const handleSubmit=async()=>{
    let api=`https://api.cloudinary.com/v1_1/dxobvu02n/image/upload`
    const formData=new FormData();
   formData.append("file",file)
      formData.append("upload_preset","himanshi")
      formData.append("cloud_name","dxobvu02n")
        const response = await axios.post(api, formData);
        console.log(response)
        console.log(response.data.url);
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





