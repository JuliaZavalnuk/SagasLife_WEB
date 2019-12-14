import React, {Component} from 'react';

import { Line, Circle } from 'rc-progress';

class ProgressBar extends Component {
    render() {
        return(
            <>
                <div>ProgressBar</div>
                <Line percent="50" strokeWidth="1" strokeColor="#D3D3D3" />
            </>
        )
    }
}

export default ProgressBar;