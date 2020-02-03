
import React from 'react';
import PhotoComment from './PhotoComment'
import photoData from '../../static/PhotoData.json';

class SagaImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photoData: photoData
        };
    }



    render(){
        return(
            <div>
                <PhotoComment data = {this.state.photoData}/>
            </div>
        );
    }
}



export default SagaImage;