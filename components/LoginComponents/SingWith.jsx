import React, { Component } from 'react';
import '../../styles/main.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
//import Facebook from '../../static/logo.png'


class SingWith extends Component{

    render(){
        return(
            <div>
                {/*<Social img = {Facebook}/>*/}
            </div>
        );
    }   
}

const Social = props => (
    <div>
        <button>
            {/*<img src = {props.img}></img>*/}
        </button>
    </div>
);

export default SingWith;