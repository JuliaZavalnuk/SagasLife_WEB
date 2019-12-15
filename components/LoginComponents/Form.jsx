// connect to notifications
import { store } from 'react-notifications-component';

// connect to progress bar
import ProgressBar from '../ProgressBar/ProgressBar';

import React, { Component } from 'react'
import GreenLine from "./GreenLine";
import Link from 'next/link';
//import './Form.css';

const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
}

const emeilRegex = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);


class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            formErrors:{
                email: "",
                password: ""
            },
            isWaiting: false,
        };

    }

    handleSubmit = e => {
        // After press button you changed state, that leads to render ProgressBar element
        this.setState({isWaiting: true}); 

        // In 2 seconds you make possibility to render it again
        setTimeout(() => {
            this.setState({isWaiting: false});
        }, 2000)
        
        // Inside If statement you need to put some user's mistake.
        // For example: user wrote wrong login or password
        if(false) {
            store.addNotification({
                title: 'Wrong e-mail or password',
                message: 'Please, type correct data',
                type: 'warning',                        
                container: 'top-center',               
                animationIn: ["animated", "fadeIn"],     
                animationOut: ["animated", "fadeOut"],   
                dismiss: {
                duration: 3000 
                }
            });
        }
        e.preventDefault();
        if (formValid(this.state.formErrors)) {
            console.log(`
                --submiting--
                Email: ${this.state.email}
                Password: ${this.state.password}
            `)
        }
        else {
            console.error('FORM INVALID')
        }
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case 'Email':
                formErrors.firstName = 
                    emeilRegex.test(value) && value.length > 0 
                        ?""
                        :'invalid email';
                break;
            case 'Password':
                    formErrors.firstName = 
                        value < 6 && value.length > 0 
                            ?'minimum 6 characters'
                            : "";
                break;
        }
        this.setState({formErrors, [name]: value}, () => console.log());
    }


    render(){
        return(
            <div>
                {this.state.isWaiting === false ? null :
                    <ProgressBar />
                }
                <form onSubmit = {this.handleSubmit} onChange = {this.handleChange} noValidate>
                  <Input onChange = {this.handleChange} name = 'Email' placeholder = 'user@mail.com' type = 'email'/>
                  <Input name = 'Password' placeholder = '••••••••' type = 'password'/>
                  <Ref divclassname = 'ForgotPassword' aclassname = 'refForgotPassword' text = 'Forgot Password'/>
                  <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'sing in'/>
                </form>
                
            </div>
        
        );
    }
}


const Input = props => (
  <div>
    <div className = {`${props.name}`}>
        <label className= 'FormLabel'>{props.name}</label><br/>
        <input 
        type = {`${props.type}`}
        className = 'FormInput' 
        placeholder = {`${props.placeholder}`}
        name = {`${props.name}`}
        noValidate
        
        />
          
    </div>
    <GreenLine />
  </div>
  );
  
  
  const Ref = props => (
    <Link href = {`${props.ref}`}>
    <div className = {`${props.divclassname}`}>
      <a className = {`${props.aclassname}`} >{props.text}</a>
    </div>
    </Link>
  );
  
  const Button = props => (
    <div className = {`${props.divclassname}`}>
      <button className = {`${props.buttonclassname}`} type = {`${props.type}`}>{props.name}</button>
    </div>
  )
  


export default Form;