import SVGline from './SVGLine';
import SingleComment from './SingleComment';

export default function CommentList(props){
    const list = props.list;
    return(
        <div className = 'CommentText'>
            <div className = 'CommentsHead'>
                {list.length} comments
                <div className = 'top-right'>
                    <img src = '../../../static/close.png'></img>
                </div>
                <SVGline className ='SVG' width = '304'/>
            </div>
            <div className = 'ScrollBlock' style = {{height: props.commentsHeight - 53}}>
                {list.map((value) => {
                    return(
                        <div>
                            <SingleComment 
                                username = {value.username}
                                length = {value.likes.length}
                                comment = {value.comment}
                                ago = {value.ago}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
