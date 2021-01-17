import React from 'react';

import Form from 'react-bootstrap/Form'

import Jumbotron from 'react-bootstrap/Jumbotron';

import Button from 'react-bootstrap/Button'

import './Intro-component.css';

import {Link} from 'react-router-dom';

const Intro = () => (
  <div className="Z">
    <div className="row">
      <div className="col-md-6">
      <Jumbotron className='border-ra bg-dark text-light mx-auto my-6' variant='bg-dark'>
        <h5>The world is facing an unprecedented challenge with communities and economies everywhere affected by the growing COVID-19 pandemic. The Covid 19 Pandemic has affected us all in many different ways. For some it has been a life changing crisis. We as an organistaion want to join hands with you and help the people out there who are going through crisis. It’s never been more urgent to support the global response. On the right there is a form where you can fill in your details and donate money. Each penny is counted! </h5>

      </Jumbotron>
      </div>
      <div className="col-md-6">
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
      </div>
    </div>

  </div>
);

export default Intro;