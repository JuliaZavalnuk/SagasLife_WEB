import React, { Component } from 'react';
import Header from './Header';
import Page from './Page';
import Nav from './Nav';
import InsidePost from './InsidePost';
import Footer from './Footer';
import '../../styles/User_styles/styledContent.css';
import '../../styles/User_styles/styledMytimelaps.css';


class UserProfile extends Component {

    render() {
      return (
        <>
            <Header />
            <div className="body">
               <Page/>

                <Nav />
                
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
            </div>
            <Footer/>  
        </>
      )
    }
  }
  
  export default UserProfile