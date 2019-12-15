import Form from './LoginComponents/Form';
import React, { Component } from 'react'
import SingWith from './LoginComponents/SingWith';

class Login extends Component{
  render(){
    return(
      <div className = 'FormDiv'>
      <Form/>
      <SingWith/>
    </div>
    );
  }
}

  
  export default Login;