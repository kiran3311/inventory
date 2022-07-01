import React, { useState } from 'react'
import{FloatingLabel, Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const[email, setEmail]= useState('')
    const[pass, setPass]= useState('')
    const nevigateData = useNavigate()

    const loginData= async ()=>{
        
        let result =  await fetch('http://localhost:5000/login' , {
            method:'POST',
            body: JSON.stringify({email, pass}),
            headers: {"Content-Type" : "application/json"}
            
        })
         result = await result.json()
         console.log(result)
         
        
    }

  return (
    <>
    <div gap={2} className="col-md-5 mx-auto p-5 text-center my-10 reg">
      <h1>Login</h1>
      <div>
        <form method="POST">
          
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
          
          <Button variant="primary" className="my-2 " onClick={loginData}>
            Login
          </Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
