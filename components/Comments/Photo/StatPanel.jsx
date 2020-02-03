import Stat from './Stat';

export default function StatPanel(props){
    return(
        <div className = 'bottom-right'>
        <Stat 
            onClick = {props.onClick} 
            name = 'like'             
            class = 'Icon' 
            number = {props.numLike} 
        />
        <Stat 
            onClick = {props.onClick} 
            name = 'share'  
            class = 'Icon' 
            number = {props.numShare} 
        />
        <Stat 
            onClick = {props.onClick} 
            name = 'comment'  
            class = 'Icon' 
            number = {props.numComm} 
        />
    </div>
    );
}