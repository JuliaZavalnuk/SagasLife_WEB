import React, { Component } from 'react'
import '../../styles/FormStyles/FormHead.css';


class Logo extends Component{
    render(){
        return(
            <div className = 'Head'>
                <img width="48px" height="48px" src="/static/Sagas_Logo.png" alt="n" className = 'Logo'/>
                <img src="/static/Label.png" alt="n" className = 'Label'/>
            </div>
            
        );
    }
    
}

export default Logo;