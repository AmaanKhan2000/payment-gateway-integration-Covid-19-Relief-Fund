import React from 'react';
import './main-ui-2-component.css';

import Navbar from 'react-bootstrap/Navbar';


import BloodDonation from '../../Videos/original.mp4';

import Logo from '../../Videos/blood.png';
import FormC from '../form-component/form-component';

const MainUI2 = () => (
  <div className="showcase">
    <div className="video-container">
      <video src={BloodDonation} autoPlay muted loop></video>
    </div>
  <div className="content">
  <Navbar bg="light" variant="light" className='visibility'>
  <Navbar.Brand href="#home" className='center'>
    <img
      alt=""
      src={Logo}
      width="130"
      height="90"
      className="d-inline-block align-top align-center ml-5"
    />{'  '}
  </Navbar.Brand>
  <p className="downscale">BLOOD DONATION CAMP</p>
  </Navbar>
  <FormC />
  </div>
  </div>
);

export default MainUI2;