import React, { Component } from 'react'
import '../../styles/FormStyles/FormFoot.css';


class SingWith extends Component{
    render(){
        return(
            <div className = 'SocialNetworks'>
                <div className = 'or'>
                    or
                </div>
                <div className = 'ButtonDiv'>
                    <Button name = 'facebook' />
                    <Button name = 'instagram' />
                    <Button name = 'google' />
                </div>
            </div>
            
        );
    }
    
}

const Button = props => (
    <button className = 'SingButton'>
        <img src= {`/static/${props.name}.png`} alt="n" className = 'button'/>
    </button>
);

export default SingWith;