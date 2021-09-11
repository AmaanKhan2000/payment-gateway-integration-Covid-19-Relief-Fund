import React from 'react';

import './form-component.css';

import Jumbotron from 'react-bootstrap/Jumbotron';

import ScriptTag from 'react-script-tag';

export default class FormC extends React.Component{

  render(){

    return(
      <div className='middle'>
        <Jumbotron className='mn-2 border-ra bg-dark text-light mx-auto my-6' variant='bg-dark'>
        <p className='left'>It's a pleasure to see you here, down is a RazorPay Link which will lead you to do payments. </p>
        <br/>
        <h3 className='left'>Testing Card Details - </h3>
        <br/>
        <p className='left'>Card Number - 4111 1111 1111 1111</p>
        <p className='left'>CVV- Random Number</p>
        <p className='left'>Expiry Date - Any Future Date</p>
        <form><ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HvpIyjavfZJPOg" async> </ScriptTag></form>
        </Jumbotron>
     </div>
    )
  }
}
