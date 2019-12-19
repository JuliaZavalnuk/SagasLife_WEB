import React, {Component} from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'progress'
        }
    }

    clas

    componentDidMount() {
        setTimeout(() => {
            this.setState({query:'success'});
        }, 2500);
    }

    render() {
        return(
            <>
                {this.state.query === 'success' ? (null) : 
                (<div className="progress">
                    <CircularProgress size='100%' styles={{opacity: 0}}/>
                </div>
                )}
            </>
        )
    }
}

export default ProgressBar;