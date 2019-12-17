import Form from './LoginComponents/Form';
import Logo from './LoginComponents/Logo'
import React, { Component } from 'react'
import SingWith from './LoginComponents/SingWith'

class Login extends Component{
  render(){
    return(
      <div className = 'FormDiv'>
        <Logo/>
        <Form/>
        <SingWith/>
      </div>
    );
  }
}

  
  export default Login;