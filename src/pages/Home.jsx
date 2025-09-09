// import axios from "axios";
// import { useState } from "react";
// const Home=()=>{
//   const [file,setFile]=useState("")
//   const onChangeHandler=(e)=>{
//     setFile(e.target.files[0]);
//     console.log(file)
//   }
//   const handleSubmit=async()=>{
//     let api=`https://api.cloudinary.com/v1_1/dxobvu02n/image/upload`
//     const formData=new FormData();
//    formData.append("file",file)
//       formData.append("upload_preset","himanshi")
//       formData.append("cloud_name","dxobvu02n")
//         const response = await axios.post(api, formData);
//         console.log(response)
//         console.log(response.data.url);
//   }
//   return(
//     <>
//      <h3>Welcome to home page!!</h3>  
//  Upload your images: <input type="file" onChange={onChangeHandler}/><br/><br/>
//      <button onClick={handleSubmit}>Upload</button>
//     </>
//   )
// }
// export default Home;


import axios from "axios";
import { useState } from "react";
const Home=()=>{
  const [input,setInput]=useState({})
  const onChangeHandler=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setInput(values=>({...values,[name]:value}));
    console.log(input)
  }
  const handleSubmit=async()=>{
    let api="http://localhost:8000/usersave"
        const response = await axios.post(api, formData);
        console.log(response)
        console.log(response.data.url);
  }
  return(
    <>
     <h3>Welcome to home page!!</h3>  
     enter username:<input type="text" name="username" onChange={onChangeHandler}/>
     <br/>
      enter email:<input type="text" name="email" onChange={onChangeHandler}/>
     <br/>
      enter firstname:<input type="text" name="firstname" onChange={onChangeHandler}/>
     <br/>
      enter lastname:<input type="text" name="lastname" onChange={onChangeHandler}/>
     <br/>
     <button onClick={handleSubmit}></button>
    </>
  )
}
export default Home;









