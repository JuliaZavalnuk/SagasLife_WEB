import '../../../styles/CommentStyles/Comment.css'

export default function AddComm(props){
    return(
        <div className = 'NewCommentDiv'>
            <form>
                <textarea name="AddComment" id="AddComment" cols="32" rows="2"></textarea>
                <button className = 'SubmitComment' onClick = {props.onSubmit}>
                    <img src = '../../../static/send.png'></img>
                </button>
            </form>
        </div>
    );
}