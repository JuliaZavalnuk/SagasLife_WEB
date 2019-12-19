import React, {Component} from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

class ProgressBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'success',
        }
    }

    handleClick() {
        this.setState({query:'progress'});
        setTimeout(() => {
            this.setState({query:'success'});
        }, 2500);
    }

    render() {
        return(
            <div className="notifications__block">
                <button className="progress__button" onClick={() => this.handleClick()}>
                    Test progressbar
                </button>
                {this.state.query === 'success' ? (null) : 
                (<div className="progress">
                    <CircularProgress size='100%' styles={{opacity: 0}}/>
                </div>
                )}
            </div>
        )
    }
}

export default ProgressBarExample;