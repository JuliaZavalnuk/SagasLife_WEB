import React, {Component} from 'react';
import '../../styles/notifications/notifications.css';

import ButtonFailedLogin from './ButtonFailedLogin';
import ButtonNotValidLogin from './ButtonNotValidLogin';
import ButtonSuccessLogin from './ButtonSuccessLogin';
import ButtonFailedImage from './ButtonFailedImage';
import ImageLoader from './ImageLoader';

import ProgressBarExample from '../ProgressBar/ProgressBarExample';

class Notifications extends Component {
    render() {
        return(
            <div className="notifications">
                <ButtonFailedLogin />
                <ButtonNotValidLogin />
                <ButtonSuccessLogin />
                <ButtonFailedImage />
                <ProgressBarExample />
                <ImageLoader />
            </div>
        )
    }
}

export default Notifications;