import UserPic from './UserPic';

export default function LikeList(props){
    const likes = props.likes;
    if(!props.isHidden){
        return(
            <div className = 'likeList' style = {{width: props.width}}> 
                {likes.map((value) => {
                    return(
                        <UserPic isAuthor = {false} userPicSrc ={`../../../static/${value}.png`}/> 
                    );
                })}
            </div>
        );
    }
    else{
        return(
            <div className = 'likeList bottom-left' style = {{width: props.width - 200}}> 
                {likes.map((value) => {
                    return(
                        <UserPic isAuthor = {false} userPicSrc ={`../../../static/${value}.png`}/> 
                    );
                })}
            </div>            
        );
    }
}