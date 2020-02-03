import React, { Component } from 'react'
import '../../styles/FormStyles/FormFoot.css';
import '../../styles/CommentStyles/Comment.css'
import Photo from './Photo/Photo';
import CommentsBlock from './Comment/CommentsBlock';
import Format from "./Format";

class PhotoComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            isHidden: false
        };
    }

    Hide = () => {
        let status = this.state.isHidden;
        this.setState({
            isHidden: !status
        })
    }

    getLightWidth(){
        if(this.state.data.isVertical){
            return '800px'; 
        }
        else{
            return '960px';
        }
    }


    componentDidMount(){
        const image = document.querySelector('.Photo')
        this.setState({
            height: image.clientHeight
        });
    }

    render(){
        return(
            <Format
               isHidden = {this.state.isHidden}
               getLightWidth = {this.getLightWidth()}
               photoSrc = {this.state.data.photoSrc} 
               imageIsVertical = {this.state.data.isVertical} 
               data = {this.state.data}
               data = {this.state.data} 
               height = {this.state.height}
               Hide = {this.Hide}
            />
            
        );
    }
    
}

// function Format(props){
//     if(!props.isHidden){
//         return(
//             <div className = 'LightDiv' style = {{width: props.getLightWidth}}>
//             <div className = 'PhotoBlock'>
//                 <Photo 
//                     photoSrc = {props.photoSrc} 
//                     imageIsVertical = {props.isVertical} 
//                     data = {props.data}
//                     isHidden = {props.isHidden}
//                     Hide = {props.Hide}
//                 />
//             </div>
//                 <CommentsBlock data = {props.data} height = {props.height}/>
//             </div>
//         );

//     }else{
//         return(
//             <div className = 'PhotoBlock'>
//             <Photo 
//                 photoSrc = {props.photoSrc} 
//                 imageIsVertical = {props.isVertical} 
//                 data = {props.data}
//                 isHidden = {props.isHidden}
//                 Hide = {props.Hide}
//             />
//             </div>
//         );

//     }
// }



export default PhotoComment;