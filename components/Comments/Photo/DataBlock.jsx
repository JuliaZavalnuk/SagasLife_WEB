import UserPic from './UserPic';

export default function DataBlock(props){
    const username = props.username;
    const tags = props.tags;
    const name = props.name;
    return(
        <div className = 'top-left'>
            <UserPic isAuthor = {true} userPicSrc ={`../../../static/${username}.png`} />
            <div className = 'photoData'>
                <div className = 'dataBlockName'>
                    {name}
                </div>
                <div className = 'dataBlockTags'>
                    {tags.map((value) => {
                        return(
                        <span>#{value}&nbsp;</span>
                        );
                        })}
                </div>
            </div>
        </div>
    );
}
