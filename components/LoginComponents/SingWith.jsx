import React, { Component } from 'react'
import '../../styles/FormStyles/FormFoot.css';
import Facebook from './SingWith/Facebook';
import Google from './SingWith/Google';

class SingWith extends Component{
    render(){
        return(
            <div className = 'SocialNetworks'>
                <div className = 'or'>
                    or
                </div>
                <div className = 'ButtonDiv'>
                    <Facebook/>
                    <Google/>
                    <Button name = 'instagram' />
               
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