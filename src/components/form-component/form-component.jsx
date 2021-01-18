import React from 'react';

import './form-component.css';

import InputGroup from 'react-bootstrap/InputGroup';

import FormControl from 'react-bootstrap/FormControl'

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form'

export default class FormC extends React.Component{
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
  <Form.Group controlId="formBasicMoney">
    <Form.Label>Amount to Donate</Form.Label>
    <InputGroup className="mb-2 mr-sm-2">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="inlineFormInputGroupUsername2" placeholder="Enter the Amount Value" />
  </InputGroup>
  </Form.Group>
  <div className="row">
    <div className="col-md-6">
    <p className='middle'>
  <Button variant="danger" className='p-2 px-5 mt-3 middle'>Go Back</Button>
   </p>
    </div>
    <div className="col-md-6">
    <p className='middle'>
  <Button variant="success" className='p-2 px-5 mt-3 middle'>DONATE!</Button>
   </p>
    </div>
  </div>
</Form>
    )
  }
}
