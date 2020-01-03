import { store } from 'react-notifications-component';
import React, { Component } from 'react'
import Link from 'next/link';
import '../../styles/FormStyles/Form.css';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';


const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid; 
}


const emeilRegex = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);


  const CssTextField = withStyles({
      root:
      {
      '& .MuiFormLabel-root': {
        color: '#98BF1F',
        marginLeft: '16px',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#98BF1F',
      },
      '& .MuiInput-input':{
        color: 'rgba(255, 255, 255, 0.87)',
        marginLeft: '16px',
      },
      '& .MuiTextFiled':{
        marginBottom: '16px',
      },
        background: 'rgba(255, 255, 255, 0.12)',
        border: 'none',
        width: '304px',
        borderRadius: 3,
        color: 'while',
        borderBottomColor: '#98BF1F',
    },
    
  })(TextField);

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

    SubmitInfo(Stitle, Smessage) {
      store.addNotification({
        title: Stitle,
        message: Smessage,
        type: 'warning',                        
        container: 'top-center',               
        animationIn: ["animated", "fadeIn"],     
        animationOut: ["animated", "fadeOut"],   
        dismiss: {
        duration: 3000 
        }
    });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.setState({isWaiting: true}); 

        setTimeout(() => {
            this.setState({isWaiting: false});
        }, 2000)

        if (formValid(this.state.formErrors)) {
          this.SubmitInfo('Synced', 'User data checking...');
            window.location.href="/user";
        }
        else {
          this.SubmitInfo('Wrong e-mail or password', 'Please, type correct data');
           
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

                  <CustomInput label="Email" type = 'email' name = 'Email' onChange = {this.handleChange}/>
                  <CustomInput label="Password" type = 'password' name = 'Password' onChange = {this.handleChange}/>

                  <Ref divclassname = 'ForgotPassword' aclassname = 'refForgotPassword' text = 'Forgot Password' jref = './'/>
                  <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'sing in/sing up'/>
                </form>
                
            </div>
        
        );
    }
}

  const CustomInput = props => (
    <div className = 'InputDiv'>
      <CssTextField id="custom-css-standard-input" label={`${props.label}`} type = {`${props.type}`} name = {`${props.name}`}/>
            
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