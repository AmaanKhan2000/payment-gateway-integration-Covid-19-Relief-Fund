import React from 'react';
import './main-ui-2-component.css';
import CovidVideo from '../../Videos/CovidVideo.mp4';

import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../Videos/logo_transparent.png';
import Form from '../form-component/form-component';

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
</div>
  <Form />
</div>
);

export default MainUI2;