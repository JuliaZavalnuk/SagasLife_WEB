import React, { Component } from 'react'
import '../../styles/FormStyles/FormFoot.css';
import Facebook from './Facebook';


class SingWith extends Component{
    render(){
        return(
            <div className = 'SocialNetworks'>
                <div className = 'or'>
                    or
                </div>
                <div className = 'ButtonDiv'>
                    <Facebook/>
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