import React,  { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { FormGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function signupUser(e){
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log(e.target.firstName.value)
    console.log(e.target.lastName.value)
    console.log(e.target.radioGirl.value)
    console.log(e.target.radioGuy.value)
    e.preventDefault()
   
    fetch('http://localhost:3001/users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({email:e.target.email.value,
        password:e.target.password.value,
        firstName:e.target.firstName.value,
        lastName:e.target.lasttName.value,
        radioGirl:e.target.RadioGirl.value,
        radioGuy:e.target.RadioGuy.value
    
        

    }).then(response => response.json()).then(data =>{
        console.log(data)
    })
    })
}

function SignUp() {
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        
           
    return (
    
        <div className="sign-up">
            <h1>SIGN UP</h1>
         <>
            <Button variant="primary" onClick={handleShow}>
             Join Us Today!
            </Button>

            <Modal show={show} onHide={handleClose}>
                 <Modal.Header closeButton>
                    <Modal.Title>Sign-Up </Modal.Title>
                </Modal.Header>
                 <Modal.Body> Woohoo, We're excited to welcome you in!</Modal.Body>
                <Form className="loginForm" onSubmit={signupUser}>
                        
                    <FormGroup>
                    <Row>
                  <Col>
                    <Form.Control placeholder="First name" name="firstName" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" name="lastName" />
                  </Col>
                    </Row>
                    <div>
                  <Col sm={10}>
                   <Form.Check
                      type="radio"
                      label="Girl"
                      name="RadioGirl"
                      id="RadiosGirl1"
                    />
                    <Form.Check
                        type="radio"
                        label="Guy"
                        name="RadioGuy"
                        id="RadiosGuy2"
                    />
                  </Col>
                </div>
                    </FormGroup>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"/>
                    </Form.Group>
                    
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <br>
                    </br>
        
                    <Modal.Footer>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        
                    </Modal.Footer>
                    </Form>
            </Modal>
            </>
        </div>

    )
}

export default SignUp
