import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import '../../../styles/FormStyles/FormFoot.css';

export default class Google extends Component {
    state = {
        isLoggedIn: false
    }

    responseGoogle = (response) => {
        console.log(response);
    }


    render(){
        let googleContent;

        if(this.state.isLoggedIn)
        {
            googleContent = null;
        }else{
            googleContent = (<GoogleLogin
                clientId="405662870472-ltupsmtulvunrn7oqh10t7en6v130nhe.apps.googleusercontent.com"
                render={renderProps => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled} className = 'SingButton'><img src = '/static/google.png'/></button>
                )}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />);
        }

        return(
            <>
                {googleContent}
            </>
        )
    }
}
