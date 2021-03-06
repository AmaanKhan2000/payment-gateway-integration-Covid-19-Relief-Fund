import React from 'react';
import './main-ui-2-component.css';

import Navbar from 'react-bootstrap/Navbar';


import CovidVideo from '../../Videos/CovidVideo.mp4';

import Logo from '../../Videos/logo_transparent.png';
import FormC from '../form-component/form-component';

const MainUI2 = () => (
  <div className="showcase">
    <div className="video-container">
      <video src={CovidVideo} autoPlay muted loop></video>
    </div>
  <div className="content">
  <Navbar bg="light" variant="light" className='visibility'>
<Navbar.Brand href="#home" className='center'>
  <img
    alt=""
    src={Logo}
    width="90"
    height="90"
    className="d-inline-block align-top align-center ml-5"
  />{'  '}
</Navbar.Brand>
<p className="downscale">COVID-19 RELIEF FUND</p>
</Navbar>
<FormC />
</div>
</div>
);

export default MainUI2;