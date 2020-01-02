import { store } from 'react-notifications-component';
import React, { Component } from 'react'
import GreenLine from "./GreenLine";
import Link from 'next/link';
import '../../styles/FormStyles/Form.css';
import { useRouter } from 'next/router';
import { withRouter } from 'react-router-dom';

const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
}

//const router = useRouter();



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
        e.preventDefault();
        
        this.setState({isWaiting: true}); 

        setTimeout(() => {
            this.setState({isWaiting: false});
        }, 2000)

        if (formValid(this.state.formErrors)) {
            
            store.addNotification({
                title: 'Synced',
                message: 'User data checking...',
                type: 'warning',                        
                container: 'top-center',               
                animationIn: ["animated", "fadeIn"],     
                animationOut: ["animated", "fadeOut"],   
                dismiss: {
                duration: 3000 
                }
            });

            window.location.href="/user";
            //router.push('/user');
        }
        else {
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
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case 'Email':
                formErrors.email = 
                    emeilRegex.test(value) && value.length > 0 
                        ?""
                        :'invalid email';
                break;
            case 'Password':
                    formErrors.password = 
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
                  <Ref divclassname = 'ForgotPassword' aclassname = 'refForgotPassword' text = 'Forgot Password' jref = './'/>
                  <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'sing in/sing up'/>
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
    <Link href = {`${props.jref}`}>
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