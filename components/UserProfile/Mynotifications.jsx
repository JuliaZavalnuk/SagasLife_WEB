import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles/User_styles/StyledPage.css';
import '../../styles/User_styles/StyledContent.css';
import '../../styles/User_styles/StyledMynotifications.css';


class Mynotifications extends Component {

    render() {
      return (
        <div className="body">
          <Header/>
            <div className="page">
                <div className="user">
                    <div className="foto">image</div>
                    <div className="name">name</div>
                    <div className="edit"><img src='/static/edit.png'/></div>
                    <div className="text">text</div>
                    <div className="Timelapses">Timelapses:</div>
                    <div className="Shots">Shots:</div>
                </div>
            </div>    
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