// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout";
// import Registration from "./pages/registration";
// import Login from "./pages/login";
// import UserDashboard from "./pages/userdashboard";
// import Home from "./pages/home";


// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//          <Route index element={<Home/>}/>
//           <Route path="home" element={<Home/>}/>
//          <Route path="registration" element={<Registration/>}/>
//          <Route path="login" element={<Login/>} />
//         </Route>
//       </Routes>
//       <Routes>
//          <Route path="/dashboard" element={<UserDashboard/>}>
         
//          </Route>
//       </Routes>
//     </BrowserRouter>   
//     </>
//   )
// }
// export default App;







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
// # ----------------mutiple file uploading cloudinary---------------------------------mutiple file uploading  

import  { useState } from "react";
import axios from "axios";
const App=()=>{
  const [files, setFiles] = useState([]);
 const [uploadedUrls, setUploadedUrls] = useState([]);
 const handleUpload = async () => {
  if (!files.length) return alert("Please select files");
 const formData = new FormData();
 for (let i = 0; i < files.length; i++) {
 formData.append("files", files[i]);
 }
 try {
 const res = await axios.post("http://localhost:5000/upload-multiple",
formData, {
 headers: { "Content-Type": "multipart/form-data" },
 });
 setUploadedUrls(res.data.files);
 } catch (err) {
 console.error(err);
 }
 };
 return (
 <div>
 <h2>Upload Multiple Files to Cloudinary</h2>
 <input type="file" multiple onChange={(e) => setFiles([...e.target.files])}
/>
<button onClick={handleUpload}>Upload</button>


 {uploadedUrls.length > 0 && (
 <div>
 <h3>Uploaded Files:</h3>
 {uploadedUrls.map((url, index) => (
 <div key={index} style={{ margin: "10px 0" }}>
 <a href={url} target="_blank" rel="noreferrer">{url}</a>
 <br />
 {url.match(/\.(jpg|jpeg|png)$/) && (
 <img src={url} alt="uploaded" style={{ width: "200px", marginTop:
"5px" }} />
 )}
 </div>
 ))}
 </div>
 )}
 </div>
 );
}
export default App;