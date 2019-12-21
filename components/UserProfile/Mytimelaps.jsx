import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import InsidePost from './InsidePost';
import Footer from './Footer';
import '../../styles/User_styles/styledPage.css';
import '../../styles/User_styles/styledContent.css';
import '../../styles/User_styles/styledMytimelaps.css';


class Mytimelaps extends Component {

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
                    <div className="post__outer">
                        <div className="post">
                        <InsidePost />
                        </div>
                    </div>
                    <div className="post__outer">
                        <div className="post" >
                            <InsidePost />
                        </div>
                    </div>
                 <div className="post__outer">
                        <div className="post" >
                        <InsidePost />
                        </div>
                    </div>  
                   
                    
                       
                </div>
           
                <Footer/>   
     </div>
           
      )
    }
  }
  
  export default Mytimelaps