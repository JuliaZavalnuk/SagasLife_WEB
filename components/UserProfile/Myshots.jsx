import React, { Component } from 'react';
import Header from './Header';
import Page from './Page';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles/User_styles/styledContent.css';
import '../../styles/User_styles/styledMyshots.css';



class Myshots extends Component {

    render() {
      return (
        <div className="body">
          <Header/>
            <Page/>    
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