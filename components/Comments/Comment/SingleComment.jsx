import SVGline from './SVGLine';
import UserPic from '../Photo/UserPic';
import CommentSimpleMenu from './CommentDropDown';
import { useState } from 'react';

export default function SingleComment(props){
    const [liked, toLike] = useState(false);
    return(
        <div className = 'SingleComment'>
            <div className = 'inline-block'>
                <UserPic isAuthor = {false} userPicSrc ={`../../../static/${props.username}.png`}/>
            </div>
            <div className = 'inline-block CommentDataBlock'>
                <div>
                    @{props.username}
                </div>
                <div className = 'ago'>
                    {props.ago}
                </div>   
            </div>
            <div>
                <div className = 'inline-block CommentTextWidth'>
                    {props.comment}
                </div>
                <div className = 'inline-block CommentLikeStat bottom-right'>
                    {props.length + 1*ifLiked(liked)}
                    <button  onClick = {()=>{toLike(!liked)}} style ={{border: 'none', background: 'transparent'}}>
                        <img src = '../../../static/likecom.png'></img>
                    </button>
                    
                </div>
            </div>
            <div className = 'top-right'>
                <CommentSimpleMenu/>
            </div>
            
            <SVGline className ='SVG' width = '288'/>
        </div>
    );
}

function ifLiked(liked){
    if(liked){
        return 1;
    }
    else{
        return 0;
    }

}