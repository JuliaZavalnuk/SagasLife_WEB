import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles/User_styles/StyledPage.css';
import '../../styles/User_styles/StyledContent.css';



// Component

class UserProfile extends Component {

    render() {
      return (
          <>
          <Header/>
            <div className="page">
                <div className="user">
                    <div className="foto">image</div>
                    <div className="name">name</div>
                    <div className="edit"><img src="../../static/edit.png"/></div>
                    <div className="text">text</div>
                    <div className="Timelapses">Timelapses:</div>
                    <div className="Shots">Shots:</div>
                </div>
            </div>    
            <Nav/>
                <div className="content">
                    <div className="post__outer">
                        <div className="post">hello</div>
                    </div>
                    <div className="post__outer">
                        <div className="post" >second</div>
                    </div>
                    <div className="post__outer">
                        <div className="post" >third</div>
                    </div>
                </div>
            <Footer/>
        </>
         
      )
    }
  }
  
  export default UserProfile