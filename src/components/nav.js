import {default as Navigation} from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
// import ModalBody from "react-bootstrap/ModalBody"
// import ModalTitle from "react-bootstrap/ModalTitle"
// import ModalHeader from "react-bootstrap/ModalHeader"
// import FormControl from "react-bootstrap/FormControl"
import React, { useState } from 'react'


function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">All-Ready</Navbar.Brand>
        <Navigation className="mr-auto">
        <Navigation.Link href="#home">Home</Navigation.Link>
        <Button id="SignInButton" variant="outline-info" onClick={handleShow} >Sign-In</Button>
        <Button id="loginButton" variant="outline-info" onClick={handleShow} >Login</Button>
  
  

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome back to All-Ready!</Modal.Body>
        
         <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
                <Button variant="primary" type="submit">
                Submit
                </Button>
      
          </Form>
        </Modal>


</Navigation>
</Navbar>
    )
}

export default Nav
