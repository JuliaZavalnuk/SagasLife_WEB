import React, { Component } from 'react';
import Header from './Header';
import Page from './Page';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles/User_styles/styledContent.css';
import '../../styles/User_styles/styledMynotifications.css';


class Mynotifications extends Component {

    render() {
      return (
        <div className="body">
          <Header/>
            <Page/>   
            <Nav/>
            
                <div className="content">
                    
                    <div className="notif__outer">
                        <div className="notif">hello</div>
                        <div className="notif">hello</div>
                        <div className="notif">hello</div>
                    </div>
                 
                </div>
            
            <Footer/>   
        </div>
        
         
      )
    }
  }
  
  export default Mynotifications