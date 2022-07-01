import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nevigateData = useNavigate();
 
  
useEffect(()=>{
  const auth = localStorage.getItem('user')

  if(auth){
    nevigateData('/')
  }

},[])


  const addDeta = async () => {
    console.log(name, email, pass);

    let result= await fetch("http://localhost:5000/signup" ,{
        method:"POST",
        body: JSON.stringify({name, email, pass}),
        headers: {"Content-Type" : "application/json"}
    })

    result = await result.json();
    console.log(result)
    localStorage.setItem('user', JSON.stringify(result))
    nevigateData('/')

   

   
  };

  return (
      <>
    <div gap={2} className="col-md-5 mx-auto p-5 text-center my-10 reg">
      <h1>Registration</h1>
      <div>
        <form method="POST">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>
         
        
          
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </FloatingLabel>
          
          <Button variant="primary" className="my-2 " onClick={addDeta}>
            SignUp
          </Button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
