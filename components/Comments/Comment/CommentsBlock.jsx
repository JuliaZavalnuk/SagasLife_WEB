import React, { Component } from 'react'
import '../../../styles/CommentStyles/Comment.css'
import AddComm from './AddComment';
import CommentList from './CommentList';

class CommentsBlock extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            data: props.data
        };
    }

    onAdd = e =>{
        e.preventDefault();
        let text = document.querySelector('#AddComment').value;
        let dataCopy = JSON.parse(JSON.stringify(this.state.data))
        dataCopy.comments[this.state.data.comments.length] = {
            "ago":"1s",
            "username":"Ann",
            "likes":[],
            "comment":text
        } 
        this.setState({
      data:dataCopy 
    }) 
    document.querySelector('#AddComment').value = '';
    }

    render(){
        return(
            <div className = 'CommentsBlock top-right' style = {{width: '304px', margin: '8px', height: this.props.height}}>
                <CommentList list = {this.state.data.comments} commentsHeight = {this.props.height}/>
                <AddComm onSubmit = {this.onAdd}/>
            </div>
            
        );
    }
    
}

export default CommentsBlock;