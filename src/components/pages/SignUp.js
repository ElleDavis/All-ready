import React,  { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

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
                <Form className="loginForm">
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
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
             
            </Modal>
            </>
        </div>

    )
}

export default SignUp
