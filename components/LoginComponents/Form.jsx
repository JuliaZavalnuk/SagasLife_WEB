import { store } from 'react-notifications-component';

import React, { Component } from 'react'
import GreenLine from "./GreenLine";
import Link from 'next/link';
import '../../styles/FormStyles/Form.css';

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
            }
        };

    }

    handleSubmit = e => {
        store.addNotification({
            title: 'Dropbox',
            message: 'Files were synced',
            type: 'default',                         // 'default', 'success', 'info', 'warning'
            container: 'bottom-left',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
            duration: 3000 
            }
        });
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
            <div className = 'SingIn'>
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