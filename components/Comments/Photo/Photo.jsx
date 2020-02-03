import React, { Component } from 'react'
import '../../../styles/FormStyles/FormFoot.css';
import '../../../styles/CommentStyles/Comment.css'
import StatPanel from './StatPanel';
import PhotoStat from './PhotoStat';
import MainImage from './MainImage';
import DataBlock from './DataBlock';
import SimpleMenu from './DropDown';
import LikeList from './LikeList';

class Photo extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            photoSrc: this.props.data.photoSrc,
            stats : {
                liked: props.data.likes.length,
                shared: props.data.shares,
                commented: props.data.comments.length, 
                photo: props.data.photos
            },
            submitData: {
                hasLiked: false,
                photoIs: false
            }
        };

    }
    handleClick = e => {
        //e.preventDefault();
        const name = e.target.name;
        let stats = this.state.stats;
        let submitData = this.state.submitData;
        switch(name) {
            case 'like':
                if(submitData.hasLiked){
                    submitData.hasLiked = !submitData.hasLiked
                    let dataCopy = JSON.parse(JSON.stringify(this.state.data))
                    dataCopy.likes.splice([dataCopy.likes.length - 1],1);
                    this.setState({
                    data:dataCopy 
                }) 
                    
                }else{
                    submitData.hasLiked = !submitData.hasLiked
                    let dataCopy = JSON.parse(JSON.stringify(this.state.data))
                    dataCopy.likes[dataCopy.likes.length] = 'Ann';
                    this.setState({
                    data:dataCopy
                })
                }
                break;
            case 'share':
                    stats.shared = stats.shared + 1
                break;
            case 'comment':
                    this.props.Hide();
                break;
            case 'photo':
                if(submitData.photoIs){
                    submitData.photoIs = !submitData.photoIs
                    stats.photo = stats.photo - 1
                }else{
                    submitData.photoIs = !submitData.photoIs
                    stats.photo = stats.photo + 1
                }
                break;
        }
        this.setState({
            stats: stats,
            submitData: submitData
        });
    }

    getWidth(){
        if(this.state.data.isVertical){
            return '464px'; 
        }
        else{
            return '624px';
        }
    }  

    getPhotoWidth(){
        if(this.state.data.isVertical){
            return '448px'; 
        }
        else{
            return '612px';
        }
    }

    render(){
        return(
            <div style = {{position: 'relative'}}>
                <div className = 'Photo imageShadow border4' style= {{width: this.getWidth(), backgroundImage: 'url(' + `${this.state.photoSrc}` + ')'}}>
                    <MainImage photoSrc = {this.state.photoSrc} state = {this.state.data.isVertical}/>
                    <StatPanel  
                        onClick = {this.handleClick}    
                        numLike = {this.state.data.likes.length}
                        numShare = {this.state.stats.shared}
                        numComm = {this.state.stats.commented}
                    />
                    <PhotoStat
                        onClick = {this.handleClick} 
                        number = {this.state.stats.photo}
                        isHidden = {this.props.isHidden} 
                    />
                    <DataBlock username = {this.state.data.Author} tags = {this.state.data.tags} name = {this.state.data.name}/>
                    <SimpleMenu />
                </div>
                    <LikeList likes = {this.state.data.likes} width = {this.getPhotoWidth()} isHidden = {this.props.isHidden}/>
            </div> 
        );
    }
}


export default Photo;