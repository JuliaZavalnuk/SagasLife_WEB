import React, {Component} from 'react';

import { store } from 'react-notifications-component';

class ButtonFailedLogin extends Component {

    buttonClick() {
        store.addNotification({
            title: 'Wrong e-mail or password',
            message: 'Please, type correct data',
            type: 'warning',                        
            container: 'top-center',               
            animationIn: ["animated", "fadeIn"],    
            animationOut: ["animated", "fadeOut"], 
            dismiss: {
            duration: 5000 
            }
        })
    }

    render() {
        return(
            <div className="notifications__block">
                <button
                className="notifications__button"
                onClick={() => {
                    this.buttonClick()}
                }
                >
                    Failed login
                </button>
            </div>
        )
    }
}

export default ButtonFailedLogin;