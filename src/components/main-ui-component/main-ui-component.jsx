import React from 'react';

import './main-ui-component.styles.css';

import CovidVideo from '../../Videos/original.mp4';

import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../Videos/blood.png';

import Intro from '../Intro-component/INtro-component';



const MainUI = () => (
  <div>
    <div className="showcase">
    <div className="video-container">
      <video src={CovidVideo}  autoPlay muted loop></video>
    </div>
    <div className="content">
    <Navbar bg="dark" variant="light" className='visibility2'>
  <Navbar.Brand href="#home" className='center'>
    <img
      alt=""
      src={Logo}
      width="130"
      height="90"
      className="d-inline-block align-top align-center ml-5"
    />{'  '}
  </Navbar.Brand>
  <p className="downscale animate__animated animate__slideInRight" style={{color:"white"}}>BLOOD DONATION CAMP</p>
  </Navbar>
  <Intro />
  
  </div>
  </div>
  </div>
  
);

export default MainUI; 