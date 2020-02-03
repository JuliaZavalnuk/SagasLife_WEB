export default function MainImage(props){
    const state = props.state;
    const photoSrc = props.photoSrc;
    if(state){
        return(
            <div>
                <img src = {photoSrc} className = 'image464 border4'/>
            </div>
        );
    }
    else{
        return(
            <div>
                <img src = {photoSrc} className = 'image624 border4'/>
            </div>
        );
    }
};