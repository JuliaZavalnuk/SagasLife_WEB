export default function UserPic(props){
    const isAuthor = props.isAuthor;
    const userPicSrc = props.userPicSrc;
    if(isAuthor){
        return(
            <div style = {{width: '56px', height: '56px'}} className = 'userPic'>
                <img
                    onClick = {handleClick}
                    src = {`${userPicSrc}`}
                    className = 'round userBorder'
                    style = {{width: '56px', height: '56px'}}
                />
            </div>
        );
    }
    else{
        return(
            <div style = {{width: '40px', height: '40px'}} className = 'userPic'>
                <img
                    onClick = {handleClick}
                    src = {`${userPicSrc}`}
                    className = 'round imageSize-40'
                    style = {{width: '40px', height: '40px'}}
                />
            </div>
        );
    }
}

function handleClick(){
    window.location.href="/user";
}
