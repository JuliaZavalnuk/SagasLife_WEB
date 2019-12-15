import React, {Component} from 'react';

import { store } from 'react-notifications-component';

class ButtonNotValidLogin extends Component {

    buttonClick() {
        store.addNotification({
            title: 'Not valid data',
            message: 'Please, type correct data',
            type: 'warning',                         // 'default', 'success', 'info', 'warning'
            container: 'top-center',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
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
                    Not valid login
                </button>
            </div>
        )
    }
}

export default ButtonNotValidLogin;