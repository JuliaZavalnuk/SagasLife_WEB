import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/User_styles/styledPage.css';
import '../../styles/User_styles/styledContent.css';
import '../../styles/User_styles/styledSettings.css';


class Settings extends Component {

    render() {
      return (
    <>
            <Header />
            <div className="body">
                <div className="page">
                    <div className="user">
                        <div className="foto">image</div>
                        <div className="name">name</div>
                        <div className="text">text</div>
                    </div>
                    
                </div>
                <div className="content">
                    <div className="content_set">
                        <div className="topic">
                            Login
                        </div>
                        <div className="e-mail">
                            <div className="word">E-mail</div>
                            <div className="user_email">MaxiMargo@mail.com</div>
                        </div>
                        <div className="password"> Change password </div>
                        <div className="topic">
                            Connected social network
                        </div>
                    </div>
                    <div className="set">
                        <div className="social_network">
                        
                            <div className="names">
                                <div className="component1">Connect with Facebook</div>
                                <div className="component">Connect with Instagram</div>
                                <div className="component">Connect with Twitter</div>
                                <div className="component">Connect with Google ID</div>
                                <div className="component">Connect with Apple ID</div>
                                
                            </div>
                            <div className="buttons">
                                <div className="button_component">
                                    <img className="img100" src='/static/fb.png'/>
                                </div>
                                <div className="button_component">
                                    <img className="img100" src='/static/insta.png'/>
                                </div>
                                <div className="button_component">
                                    <img className="img100" src='/static/twit.png'/>
                                </div>
                                <div className="button_component">
                                    <img className="img100" src='/static/gid.png'/>
                                </div>
                                <div className="button_component">
                                    <img className="img100" src='/static/aid.png'/> 
                                </div>
                            </div>
                            <div className="topic">
                            Notifications
                            </div>    
                        </div>
                    </div>
                    
                    <div className="set">
                        <div className="notific_set">
                        <div className="names">
                                <div className="component1">
                                    <img className="img10" src='/static/comments.png'/>Comments
                                </div>
                                <div className="component">
                                    <img className="img10" src='/static/favorites.png'/>Likes
                                </div>
                                <div className="component">
                                    <img className="img10" src='/static/share.png'/>Shares
                                </div>

                                <div className="component">
                                    <img className="img10" src='/static/addshot.png'/>Add shot to my timelapse
                                </div>
                                <div className="component">
                                    <img className="img10" src='/static/deleteshot.png'/>Delete my shot
                                </div>
                                
                            </div>
                            <div className="buttons">
                                <div className="button_component2">
                                    <img width="54px" height="54px" src='/static/icon.png'/>
                                </div>
                                <div className="button_component2">
                                    <img width="54px" height="54px" src='/static/icon.png'/>
                                </div>
                                <div className="button_component2">
                                    <img width="54px" height="54px" src='/static/icon.png'/>
                                </div>
                                <div className="button_component2">
                                    <img width="54px" height="54px" src='/static/icon.png'/>
                                </div>
                                <div className="button_component2">
                                    <img width="54px" height="54px" src='/static/icon.png'/> 
                                </div>
                            </div>  
                            <div className="topic">
                            Manage Account
                            </div>   

                        </div>
                    </div>
                    <div className="set">
                        <div className="manage_acc">
                            <div className="firstbutton"> Deactivate Account</div>
                            <div className="secondbutton"> Log out</div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer/> 
    </> 
        )
    }
  }
  
  export default Settings