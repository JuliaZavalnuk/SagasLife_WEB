import React, { Component } from 'react'
//import '../../styles/FormStyles/FormHead.css';


class SingWith extends Component{
    render(){
        return(
            <div className = 'SocialNetworks'>
                <div>
                    or
                </div>
                <div>
                    <Button path = '/static/facebook.png'/>
                </div>
            </div>
            
        );
    }
    
}

const Button = props => (
    <button className = 'SingIn'>
        <img src= props.path alt="n" className = 'Logo'/>
    </button>
);

export default SingWith;