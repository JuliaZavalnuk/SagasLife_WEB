import React, {Component} from 'react';

import { store } from 'react-notifications-component';

class ButtonSuccessLogin extends Component {

    buttonClick() {
        store.addNotification({
            title: 'You have entered!',
            message: 'Check your feed',
            type: 'success',       
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
                    Success login
                </button>
            </div>
        )
    }
}

export default ButtonSuccessLogin;