import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackendUrl from '../utils/BackendUrl';
 import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Registration=()=>{
const [input, setInput] = useState({});

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
}
const handleSubmit=async(e)=>{
  e.preventDefault();
let api=`${BackendUrl}user/Registration`
  const response = await axios.post(api, input);
  console.log(response);
  toast(response.data.msg);
}
return(
        <>
        <div className='login'>
          <h1 align="center"> User Registration </h1>
           <Form style={{width:"600px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password"  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
     <ToastContainer />
        </>
    )
}
export default Registration;