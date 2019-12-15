import React, {Component} from 'react';

import { store } from 'react-notifications-component';

class ButtonFailedImage extends Component {

    buttonClick() {
        store.addNotification({
            title: 'Image has not fetched',
            message: 'Please, retry',
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
                    Failed image loading
                </button>
            </div>
        )
    }
}

export default ButtonFailedImage;