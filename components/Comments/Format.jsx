import Photo from "./Photo/Photo";
import CommentsBlock from "./Comment/CommentsBlock";


export default function Format(props){
    if(!props.isHidden){
        return(
            <div className = 'LightDiv' style = {{width: props.getLightWidth}}>
            <div className = 'PhotoBlock'>
                <Photo 
                    photoSrc = {props.photoSrc} 
                    imageIsVertical = {props.isVertical} 
                    data = {props.data}
                    isHidden = {props.isHidden}
                    Hide = {props.Hide}
                />
            </div>
                <CommentsBlock data = {props.data} height = {props.height}/>
            </div>
        );

    }else{
        return(
            <div className = 'PhotoBlock'>
            <Photo 
                photoSrc = {props.photoSrc} 
                imageIsVertical = {props.isVertical} 
                data = {props.data}
                isHidden = {props.isHidden}
                Hide = {props.Hide}
            />
            </div>
        );

    }
}