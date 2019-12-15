import Form from './LoginComponents/Form';
import React, { Component } from 'react'
import SingWith from './LoginComponents/SingWith';

class Login extends Component{
  render(){
    return(
      <div className = 'FormDiv'>
      <Form/>
    </div>
    );
  }
}

  
  export default Login;