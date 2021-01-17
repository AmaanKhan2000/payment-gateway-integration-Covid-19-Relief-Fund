import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Button from 'react-bootstrap/Button'

import './Intro-component.css';

import {Link} from 'react-router-dom';

const Intro = () => (
  <div className="Z">
    <div className="row">
      <div className="col-md-6">
      <Jumbotron className='border-ra bg-dark text-light mx-auto my-6' variant='bg-dark'>
        <h4>“You have not lived today until you have done something for someone who can never repay you.” <span><h5> - by John Bunyan </h5></span> </h4>
        <br/>
        <h4>“No one is useless in this world who lightens the burdens of another.” <span><h5> - by Charles Dickens </h5></span> 
        </h4>

      </Jumbotron>
      </div>
      <div className="col-md-6">
      <Jumbotron className='mn-2 border-ra bg-dark text-light mx-auto my-6' variant='bg-dark'>
        <p>The Covid 19 Pandemic has affected us all in many different ways. For some it has been a life changing crisis. We as an organistaion want to join hands with you and help the people out there who are going through crisis.The world is facing an unprecedented challenge with communities and economies everywhere affected by the growing COVID-19 pandemic.  It’s never been more urgent to support the global response. You can press the button below and fill in your details and donate money. Each penny is counted! </p>
        <p className='middle'>
  <Link to='/Payment'>
  <Button variant="success" className='p-2 px-5 middle'>DONATE!</Button>
  </Link>
   </p>
      </Jumbotron>
      </div>
    </div>

  </div>
);

export default Intro;