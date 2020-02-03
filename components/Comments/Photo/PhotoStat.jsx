import Stat from './Stat';

export default function PhotoStat(props){
    if(props.isHidden){
        return(
            <div/>
        );
    }
    else{
        return(
            <div className = 'PhotoNum bottom-left'>
                <Stat 
                    onClick = {props.onClick} 
                    name ='photo'  
                    class = 'PhotoIcon' 
                    number = {props.number} 
                />
            </div>
        );
    }
}