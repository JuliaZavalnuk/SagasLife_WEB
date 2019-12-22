import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles/User_styles/styledPage.css';
import '../../styles/User_styles/styledContent.css';
import '../../styles/User_styles/styledMyshots.css';



class Myshots extends Component {

    render() {
      return (
        <div className="body">
          <Header/>
            <div className="page">
                <div className="user">
                    <div className="foto">image</div>
                    <div className="name">name</div>
                    <Link href="/settings" passHref>
                    <div className="edit"><img src='/static/edit.png'/></div>
                    </Link>
                    <div className="text">text</div>
                    <div className="Timelapses">Timelapses:</div>
                    <div className="Shots">Shots:</div>
                </div>
            </div>    
          <Nav/>
             <div className="content">
                    <div className="p__outer">
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div> 
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div>
                        <div className="p">hello</div> 
                    </div>   
              </div>  
          <Footer/>   
               
        </div>
         
      )
    }
  }
  
  export default Myshots