import React, {Component} from 'react';

import { store } from 'react-notifications-component';

class ButtonFailedImage extends Component {

    buttonClick() {
        store.addNotification({
            title: 'Image has not fetched',
            message: 'Please, retry',
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
                    Failed image loading
                </button>
            </div>
        )
    }
}

export default ButtonFailedImage;