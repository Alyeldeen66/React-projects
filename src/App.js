import React from 'react';
import './App.css';
import  Button  from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import image from './LoginPic.jpg';

function App() {
  return (
    
     <div className="App" >
       <Container className="container"> 
       <div className="center">
          
       <img id="img1" src={image}></img>
       </div>
        <Form className="form">
          <Form.Group >
            <Form.Label> <h1>Email Address</h1></Form.Label>
            <Form.Control type="email" placeholder="Enter your email address"></Form.Control>
          </Form.Group>
          <Form.Group className="pass-form">
            <Form.Label><h1>Password</h1></Form.Label>
            <Form.Control type="password" placeholder='Enter your password'></Form.Control>
          </Form.Group>
          <Form.Group className="check-form">
           
            <Form.Check type="checkbox" label="Remember me"></Form.Check>
          </Form.Group>
         </Form>
        </Container>
     </div>
     

   
  ); 
}

export default App;
