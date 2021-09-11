import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Button from 'react-bootstrap/Button'

import './Intro-component.css';

import {Link} from 'react-router-dom';

const Intro = () => (
  <div className="Z">
    <div className="row">
      <div className="col-md-12">
      <Jumbotron className='mn-2 border-ra bg-dark text-light mx-auto my-6' variant='bg-light'>
        <p>Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.

        There is a constant need for a regular supply of blood because it can be stored only for a limited period of time before use. Regular blood donation by a sufficient number of healthy people is needed to ensure that blood will always be available whenever and wherever it is needed.

        Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.
        </p>
        <h5>WE HELP THE NEEDY, YOU CAN DONATE TO US BY USING THE LINK BELOW.</h5>
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