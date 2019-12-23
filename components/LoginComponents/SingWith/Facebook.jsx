import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import '../../../styles/FormStyles/FormFoot.css';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false
    }

    responseFacebook = response =>{
        console.log(response);
    }


    render(){
        let fbContent;

        if(this.state.isLoggedIn)
        {
            fbContent = null;
        }else{
            fbContent = (<FacebookLogin
                appId="1475477429269383"
                autoLoad
                callback={this.responseFacebook}
                render={renderProps => (
                  <button onClick={renderProps.onClick} className = 'SingButton'><img src = '/static/facebook.png'/></button>
                )}/>);
        }

        return(
            <>
                {fbContent}
            </>
        )
    }
}
