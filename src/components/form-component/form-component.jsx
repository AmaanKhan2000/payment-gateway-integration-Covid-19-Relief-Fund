import React from 'react';

import './form-component.css';

import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button'

class Form extends React.Component{
  constructor() {
    super();

    this.state ={
      name: '',
      email:'',
      phone:''
    }
  }

  render(){
    return(
      <Form className ='bg-info my-6 mx-auto px-5 py-5 Y'>
      <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPhoneNo.">
    <Form.Label>Phone No.</Form.Label>
    <Form.Control type="Number" placeholder="Enter Phone No." />
  </Form.Group>
  <p className='middle'>
  <Link to='/Payment'>
  <Button variant="success" className='p-2 px-5 mt-3 middle'>DONATE!</Button>
  </Link>
   </p>
</Form>
    )
  }
}

export default Form;