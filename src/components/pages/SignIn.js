import React from "react";
import { useState } from 'react'
import "../../App.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function SignIn() {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function SigninUser(e){
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    e.preventDefault()
    


    fetch('http://localhost:3001/users', {
    method: 'POST', 
    headers: {
            'Content-Type': 'application/json',
    },
        body: JSON.stringify({email:e.target.email.value,
        password:e.target.password.value
 
        }).then(response => response.json()).then(data =>{
        console.log(data)
        
        })
  })

    
  return (

    <div className="sign-in">
      <h1>SIGN IN</h1>
   <>
      <Button variant="primary" onClick={handleShow}>
       Welcome Back!
      </Button>

      <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
              <Modal.Title>Sign-IN </Modal.Title>
          </Modal.Header>
           <Modal.Body> Woohoo, We're excited to welcome you back in!</Modal.Body>

            <Form className="loginForm">
              <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
              <br>
              </br>
  
          </Form>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  
              </Modal.Footer>
       
      </Modal>
      </>
    </div>
    )
  }
}

export default SignIn